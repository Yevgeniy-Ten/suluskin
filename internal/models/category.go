package models

import (
	"context"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Category struct {
	ID      string `bson:"_id,omitempty"`
	Name    string `bson:"name"`
	Enabled bool   `bson:"enabled"`
}

func CreateCategory(category Category) (string, error) {
	collection := Client.Database("suluskin").Collection("categories")
	result, err := collection.InsertOne(context.TODO(), category)
	if err != nil {
		return "", err
	}
	return result.InsertedID.(primitive.ObjectID).Hex(), nil
}
