package middle

import (
	"SvelteDemo.net/server/global/config"
	"SvelteDemo.net/server/router/result"
	"github.com/EasyGolang/goTools/mRes/mFiber"
	"github.com/gofiber/fiber/v2"
)

func Ping(c *fiber.Ctx) error {
	json := mFiber.DataParser(c)

	ReturnData := make(map[string]any)
	ReturnData["ResParam"] = json
	ReturnData["Method"] = c.Method()
	ReturnData["AppInfo"] = config.AppInfo

	ReturnData["UserAgent"] = c.Get("User-Agent")
	ReturnData["FullPath"] = c.BaseURL() + c.OriginalURL()
	ReturnData["ContentType"] = c.Get("Content-Type")

	// 获取 token
	token := c.Get("Token")
	if len(token) > 0 {
		// Token 验证
		_, err := TokenAuth(c)
		if err != nil {
			return c.JSON(result.ErrToken.WithData(err))
		}
		ReturnData["Token"] = token
	}

	return c.JSON(result.Succeed.WithData(ReturnData))
}
