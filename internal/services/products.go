package services

import (
	"context"
	"github.com/gin-gonic/gin"
	"net/http"
	"suluskin/internal/models"
)

type ProductsService struct {
	productsRepo *models.ProductsRepo
}

func NewProductsService(productsRepo *models.ProductsRepo) *ProductsService {
	return &ProductsService{productsRepo: productsRepo}
}

func (p *ProductsService) CreateProduct(c *gin.Context) {
	product := models.Product{}
	err := c.BindJSON(&product)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	id, err := p.productsRepo.CreateProduct(product)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"id": id})
}

func (p *ProductsService) GetProductById(c *gin.Context) {
	id := c.Param("id")
	product, err := p.productsRepo.GetProductById(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, product)
}
func (p *ProductsService) DeleteProduct(c *gin.Context) {
	id := c.Param("id")
	err := p.productsRepo.DeleteProduct(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusNoContent, nil)
}
func (p *ProductsService) UpdateProduct(c *gin.Context) {
	id := c.Param("id")
	product := models.Product{}
	err := c.BindJSON(&product)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	id, err = p.productsRepo.UpdateProduct(context.TODO(), id, product)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"id": id})
}

func (p *ProductsService) GetAllProducts(c *gin.Context) {
	products, err := p.productsRepo.GetProducts()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, products)
}
