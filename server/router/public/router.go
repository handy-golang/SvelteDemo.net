package public

import (
	"SvelteDemo.net/server/router/middle"
	"github.com/gofiber/fiber/v2"
)

/*
/api/public
*/

func Router(api fiber.Router) {
	r := api.Group("/public", MiddleWare)

	r.Get("/ping", middle.Ping)
	r.Post("/ping", middle.Ping)

	r.Post("/generate_token", GenerateToken)
}
