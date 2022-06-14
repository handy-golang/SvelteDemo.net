package public

import (
	"SvelteDemo.net/server/router/api/account"
	"github.com/gofiber/fiber/v2"
)

/*
/api/public
*/

func Router(router fiber.Router) {
	r := router.Group("/private")

	r.Post("/login", account.Login)
}
