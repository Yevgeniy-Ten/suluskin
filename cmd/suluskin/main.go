package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func PingHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})
}

func main() {
	r := gin.Default()

	// Настройка маршрутов
	r.GET("/ping", PingHandler)

	// Запуск сервера
	r.Run(":8080") // По умолчанию запускается на localhost:8080
}
