package models

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
)

// DBClient интерфейс для взаимодействия с базой данных
type DBClient interface {
	Ping(ctx context.Context) error
	GetCollection(name string) *mongo.Collection
	Close(ctx context.Context) error
	GetClient() *mongo.Client
}

// MongoDBClient структура для взаимодействия с MongoDB
type MongoDBClient struct {
	client *mongo.Client
	dbName string
}

// NewMongoDBClient конструктор для создания нового клиента MongoDB
func NewMongoDBClient(uri, username, password, dbName string) (*MongoDBClient, error) {
	fmt.Println("Подключение к MongoDB...")

	clientOptions := options.Client().ApplyURI(uri).SetAuth(options.Credential{
		Username: username,
		Password: password,
	})

	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		return nil, fmt.Errorf("ошибка подключения к MongoDB: %w", err)
	}

	// Проверка соединения
	if err := client.Ping(context.TODO(), nil); err != nil {
		return nil, fmt.Errorf("ошибка проверки соединения: %w", err)
	}

	fmt.Println("Успешное подключение к MongoDB!")
	return &MongoDBClient{client: client, dbName: dbName}, nil
}

// Ping проверяет соединение с базой данных
func (m *MongoDBClient) Ping(ctx context.Context) error {
	return m.client.Ping(ctx, nil)
}

func (m *MongoDBClient) GetClient() *mongo.Client {
	return m.client
}

// GetCollection возвращает коллекцию базы данных
func (m *MongoDBClient) GetCollection(name string) *mongo.Collection {
	return m.client.Database(m.dbName).Collection(name)
}

// Close закрывает соединение с базой данных
func (m *MongoDBClient) Close(ctx context.Context) error {
	return m.client.Disconnect(ctx)
}

// Service структура, использующая DBClient
type Service struct {
	db DBClient
}

// PerformSomeDBOperation пример операции с базой данных
func (s *Service) PerformSomeDBOperation() {
	ctx := context.TODO()
	err := s.db.Ping(ctx)
	if err != nil {
		log.Fatal("Ошибка соединения с базой данных: ", err)
	}

	fmt.Println("Операция с базой данных выполнена успешно!")
}
