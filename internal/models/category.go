package models

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Category struct {
	ID      string `bson:"_id,omitempty"`
	Name    string `bson:"name"`
	Enabled bool   `bson:"enabled"`
}

// CreateCategory метод для создания категории в коллекции "categories"
func (m *MongoDBClient) CreateCategory(ctx context.Context, category Category) (string, error) {
	// Получаем коллекцию через текущий клиент
	collection := m.client.Database(m.dbName).Collection("categories")

	// Вставляем документ
	result, err := collection.InsertOne(ctx, category)
	if err != nil {
		return "", fmt.Errorf("ошибка добавления категории: %w", err)
	}

	// Конвертируем InsertedID в ObjectID и возвращаем его как строку
	insertedID, ok := result.InsertedID.(primitive.ObjectID)
	if !ok {
		return "", fmt.Errorf("ошибка конвертации InsertedID в ObjectID")
	}

	return insertedID.Hex(), nil
}
