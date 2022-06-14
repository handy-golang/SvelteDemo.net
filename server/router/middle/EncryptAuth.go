package middle

import (
	"errors"
	"fmt"

	"SvelteDemo.net/server/global/config"
	"github.com/gofiber/fiber/v2"
)

func EncryptAuth(c *fiber.Ctx) error {
	EncStr := c.Get("Auth-Encrypt")

	shaStr := config.Encrypt(c.Path())

	fmt.Println(123123)

	if EncStr != shaStr {
		return errors.New("授权验证错误")
	}

	return nil
}
