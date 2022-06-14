package middle

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func Public(c *fiber.Ctx) error {
	// 添加访问头
	AddHeader(c)

	fmt.Println(111111)

	return c.Next()
}

func AddHeader(c *fiber.Ctx) error {
	c.Set("Data-Path", "SvelteDemo.net")
	return nil
}
