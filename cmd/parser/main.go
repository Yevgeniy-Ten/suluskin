package main

import (
	service "suluskin/internal/services"
)

func main() {
	//models.ConnectToDB()

	//database := client.Database("suluskin")
	//collection := database.Collection("products")
	service.ParseYesOff()

}
