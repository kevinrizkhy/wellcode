package main

import (
	router "github.com/kevinrizkhy/Internal/app/controllers/router"
	database "github.com/kevinrizkhy/Internal/db"
)

func main() {
	database.Connect()
	router.Router()
}
