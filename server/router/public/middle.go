package public

import (
	"SvelteDemo.net/server/router/middle"
	"SvelteDemo.net/server/router/result"
	"github.com/gofiber/fiber/v2"
)

func MiddleWare(c *fiber.Ctx) error {
	c.Set("Data-Path", "SvelteDemo.net/api/public")

	// 授权验证
	err := middle.EncryptAuth(c)
	if err != nil {
		return c.JSON(result.ErrAuth.WithData(err))
	}

	return c.Next()
}
