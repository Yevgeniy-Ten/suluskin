package models

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"
)

type Product struct {
	ID    string `bson:"_id,omitempty"` // ID, который MongoDB генерирует автоматически
	Name  string `bson:"name"`
	Price int    `bson:"price"`
	Text  string `bson:"text"`
}

func CreateProduct(client *mongo.Client, product Product) error {
	collection := client.Database("suluskin").Collection("products")
	_, err := collection.InsertOne(context.TODO(), product)
	return err
}
