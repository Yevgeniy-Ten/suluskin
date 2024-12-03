package main

import (
	"context"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"suluskin/internal/models"
	service "suluskin/internal/services"
)

func PingHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}

func main() {

	uri := "mongodb://localhost:27017"
	username := "yten"
	password := "yten"
	dbName := "suluskin"
	mongoClient, err := models.NewMongoDBClient(uri, username, password, dbName)
	if err != nil {
		log.Fatal(err)
	}
	defer mongoClient.Close(context.TODO())

	productRepo := models.NewProductsRepository(mongoClient.GetClient())
	productService := service.NewProductsService(productRepo)

	r := gin.Default()

	// Выполнение операции с базой данных
	r.GET("/ping", PingHandler)
	products := r.Group("/products")
	{
		products.GET("/", productService.GetAllProducts)      // Получить все продукты
		products.GET("/:id", productService.GetProductById)   // Получить продукт по ID
		products.POST("/", productService.CreateProduct)      // Создать новый продукт
		products.PUT("/:id", productService.CreateProduct)    // Обновить продукт по ID
		products.DELETE("/:id", productService.DeleteProduct) // Удалить продукт по ID
	}

	// Запуск сервера
	r.Run(":8080") // По умолчанию запускается на localhost:8080
}
