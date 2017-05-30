package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/maaarkin/go-vue/server/models"
)

func main() {
	router := echo.New()
	router.Use(middleware.CORS())
	router.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	router.POST("/users", func(c echo.Context) error {
		cliente := new(models.Cliente)
		if err := c.Bind(cliente); err != nil {
			return err
		}
		//validar cliente

		//salvar cliente, service layer ?
		return c.JSON(http.StatusCreated, cliente)
	})
	router.Logger.Fatal(router.Start(":9090"))
}
