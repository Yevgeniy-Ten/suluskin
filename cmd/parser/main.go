package main

import (
	"suluskin/internal/models"
	service "suluskin/internal/services"
)

func main() {
	models.ConnectToDB()

	//database := client.Database("suluskin")
	//collection := database.Collection("products")
	service.ParseYesOff()

}
