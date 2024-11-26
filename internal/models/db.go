package models

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

var Client *mongo.Client

func ConnectToDB() {
	uri := "mongodb://localhost:27017"
	username := "yten"
	password := "yten"
	fmt.Println("Подключение к MongoDB...")
	// Опции подключения
	clientOptions := options.Client().ApplyURI(uri).SetAuth(options.Credential{
		Username: username,
		Password: password,
	})

	// Установка соединения
	var err error
	Client, err = mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal("Ошибка подключения к MongoDB: ", err)
	}

	// Проверка подключения
	err = Client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal("Ошибка проверки соединения: ", err)
	}
	fmt.Println("Успешное подключение к MongoDB!")
}
