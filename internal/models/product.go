package models

import (
	"context"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Product struct {
	ID         string `bson:"_id,omitempty"` // ID, который MongoDB генерирует автоматически
	Name       string `bson:"name"`
	Weight     string `bson:"weight"`
	Price      string `bson:"price"`
	Text       string `bson:"text"`
	Img        string `bson:"img"`
	CategoryId string `bson:"category_id"`
	Enabled    bool   `bson:"enabled"`
}

func CreateProduct(product Product) (string, error) {
	collection := Client.Database("suluskin").Collection("products")
	result, err := collection.InsertOne(context.TODO(), product)
	if err != nil {
		return "", err
	}
	return result.InsertedID.(primitive.ObjectID).Hex(), nil
}
