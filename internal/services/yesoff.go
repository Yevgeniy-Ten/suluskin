package services

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"suluskin/internal/models"
)

type Product struct {
	Uid        int       `json:"uid"`
	Title      string    `json:"title"`
	Sku        string    `json:"sku"`
	Text       string    `json:"text"`
	Price      string    `json:"price"`
	PriceOld   string    `json:"priceold"`
	Descr      string    `json:"descr"`
	Gallery    string    `json:"gallery"`
	Url        string    `json:"url"`
	ExternalId string    `json:"externalid"`
	Editions   []Edition `json:"editions"`
}

type Edition struct {
	Uid      int    `json:"uid"`
	Price    string `json:"price"`
	PriceOld string `json:"priceold"`
	Sku      string `json:"sku"`
	Img      string `json:"img"`
}

type ApiResponse struct {
	Products []Product `json:"products"`
}

func ParseYesOff() {
	url := "https://store.tildaapi.one/api/getproductslist/?storepartuid=578946713771&recid=676489253&c=1732625505177&getparts=true&getoptions=true&slice=1&size=36"

	// Создаем новый HTTP запрос
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	// Добавляем необходимые заголовки
	req.Header.Add("accept", "*/*")
	req.Header.Add("accept-language", "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7")
	req.Header.Add("cache-control", "no-cache")
	req.Header.Add("origin", "https://yesoffopt.com")
	req.Header.Add("pragma", "no-cache")
	req.Header.Add("priority", "u=1, i")
	req.Header.Add("referer", "https://yesoffopt.com/")
	req.Header.Add("sec-ch-ua", `"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"`)
	req.Header.Add("sec-ch-ua-mobile", "?0")
	req.Header.Add("sec-ch-ua-platform", `"macOS"`)
	req.Header.Add("sec-fetch-dest", "empty")
	req.Header.Add("sec-fetch-mode", "cors")
	req.Header.Add("sec-fetch-site", "cross-site")
	req.Header.Add("user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36")

	// Выполняем запрос
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		log.Fatalf("Error making request: %v", err)
	}
	defer resp.Body.Close()

	// Читаем тело ответа
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response body: %v", err)
	}

	// Выводим тело ответа для диагностики

	// Декодируем JSON
	var apiResponse ApiResponse
	err = json.Unmarshal(body, &apiResponse)
	if err != nil {
		log.Fatalf("Error unmarshalling JSON: %v", err)
	}
	//count
	// Выводим результат
	categoryId, _ := models.CreateCategory(models.Category{
		Name: "Для детей",
	})
	for _, product := range apiResponse.Products {
		newProduct := models.Product{
			Name:       product.Title,
			Weight:     product.Descr,
			Price:      product.Price,
			Text:       product.Text,
			Img:        product.Editions[0].Img,
			CategoryId: categoryId,
		}
		_, err = models.CreateProduct(newProduct)
		if err != nil {
			log.Fatalf("Error creating product: %v", err)
		}
	}
}
