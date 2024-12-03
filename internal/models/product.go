package models

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Product struct {
	ID         string   `bson:"_id,omitempty"` // ID, который MongoDB генерирует автоматически
	Name       string   `bson:"name"`
	Weight     string   `bson:"weight"`
	Price      string   `bson:"price"`
	Text       string   `bson:"text"`
	Img        string   `bson:"img"`
	CategoryId string   `bson:"category_id"`
	Enabled    bool     `bson:"enabled"`
	Category   Category `json:"category" bson:"category"` // Поле для категории
}

type ProductsRepo struct {
	collection *mongo.Collection
}

func NewProductsRepository(client *mongo.Client) *ProductsRepo {
	return &ProductsRepo{
		collection: client.Database("suluskin").Collection("products"),
	}
}

func (m *ProductsRepo) CreateProduct(product Product) (string, error) {
	result, err := m.collection.InsertOne(context.TODO(), product)
	if err != nil {
		return "", err
	}
	return result.InsertedID.(primitive.ObjectID).Hex(), nil
}

func (m *ProductsRepo) GetProductById(id string) (Product, error) {
	// Преобразуем строковый id в ObjectID
	objectID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return Product{}, err
	}

	matchStage := bson.D{{"$match", bson.D{
		{"_id", objectID}, // фильтруем по _id
	}}}
	//	aggregate with category and product collections
	lookupStage := bson.D{{"$lookup", bson.D{
		{"from", "categories"},
		{"localField", "category_id"},
		{"foreignField", "_id"},
		{"as", "category"},
	}}}

	cursor, err := m.collection.Aggregate(context.TODO(), mongo.Pipeline{matchStage, lookupStage})
	if err != nil {
		return Product{}, err
	}
	var product Product
	for cursor.Next(context.Background()) {
		err := cursor.Decode(&product)
		if err != nil {
			return Product{}, err
		}

	}
	return product, nil
}

func (m *ProductsRepo) GetProducts() ([]Product, error) {
	cursor, err := m.collection.Find(context.TODO(), primitive.M{})
	if err != nil {
		return nil, err
	}
	var products []Product
	for cursor.Next(context.Background()) {
		var product Product
		err := cursor.Decode(&product)
		if err != nil {
			return nil, err
		}
		products = append(products, product)
	}
	return products, nil
}
func (m *ProductsRepo) DeleteProduct(id string) error {
	objectID, err := primitive.ObjectIDFromHex(id)
	_, err = m.collection.DeleteOne(context.TODO(), primitive.M{"_id": objectID})
	if err != nil {
		return err
	}
	return nil
}

// UpdateProduct метод для обновления продукта по ID
func (m *ProductsRepo) UpdateProduct(ctx context.Context, productID string, updateData Product) (string, error) {
	// Преобразуем строковый ID в ObjectID
	objectID, err := primitive.ObjectIDFromHex(productID)
	if err != nil {
		return "", fmt.Errorf("неверный формат ID: %w", err)
	}

	// Получаем коллекцию "products"

	// Создаем обновление, только с полями, которые мы получаем в запросе
	update := bson.D{
		{"$set", bson.D{
			{"name", updateData.Name},
			{"weight", updateData.Weight},
			{"price", updateData.Price},
			{"text", updateData.Text},
			{"img", updateData.Img},
			{"category_id", updateData.CategoryId},
			{"enabled", updateData.Enabled},
		}},
	}

	// Выполняем обновление
	result, err := m.collection.UpdateOne(ctx, bson.M{"_id": objectID}, update)
	if err != nil {
		return "", fmt.Errorf("ошибка обновления продукта: %w", err)
	}

	// Проверка, был ли документ обновлен
	if result.MatchedCount == 0 {
		return "", fmt.Errorf("продукт с таким ID не найден")
	}
	return productID, nil
}
