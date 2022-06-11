package private

import (
	"SvelteDemo.net/server/router/middle"
	"SvelteDemo.net/server/router/result"
	"github.com/EasyGolang/goTools/mStr"
	"github.com/gofiber/fiber/v2"
)

func MiddleWare(c *fiber.Ctx) error {
	c.Set("Data-Type", "SvelteDemo.net/api/private")

	// 授权验证
	err := middle.EncryptAuth(c)
	if err != nil {
		return c.JSON(result.ErrApiAuth.WithData(mStr.ToStr(err)))
	}

	// Token 验证
	_, err = middle.TokenAuth(c)
	if err != nil {
		return c.JSON(result.ErrToken.WithData(mStr.ToStr(err)))
	}

	return c.Next()
}
