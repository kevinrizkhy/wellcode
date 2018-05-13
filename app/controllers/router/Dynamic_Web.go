package router

import (
	signin "github.com/kevinrizkhy/Internal/app/controllers/signin"
	"net/http"
)

func Signin(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		signin.Index(w, r)
	} else {
		signin.Sign(w, r)
	}
}
