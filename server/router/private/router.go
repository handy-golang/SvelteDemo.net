package private

import (
	"SvelteDemo.net/server/router/middle"
	"github.com/gofiber/fiber/v2"
)

/*

/api/private

*/

func Router(api fiber.Router) {
	r := api.Group("/private", MiddleWare)

	r.Get("/ping", middle.Ping)
	r.Post("/ping", middle.Ping)
}
