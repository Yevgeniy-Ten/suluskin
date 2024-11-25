package main

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	service "suluskin/internal/services"
)

func main() {
	uri := "mongodb://localhost:27017"
	fmt.Println("Подключение к MongoDB...")
	// Опции подключения
	clientOptions := options.Client().ApplyURI(uri)

	// Установка соединения
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal("Ошибка подключения к MongoDB: ", err)
	}

	// Проверка подключения
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal("Ошибка проверки соединения: ", err)
	}

	//database := client.Database("suluskin")
	//collection := database.Collection("products")
	service.ParseYesOff()
	fmt.Println("Успешное подключение к MongoDB!")

}
