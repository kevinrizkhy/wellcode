package router

import (
	"fmt"
	"github.com/gorilla/mux"
	config "github.com/kevinrizkhy/Internal/config"
	"net/http"
)

func Router() {
	fmt.Println(config.Base_URL + " --> to port :8080")
	r := mux.NewRouter()
	r.HandleFunc("/", Signin)
	r.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", http.FileServer(http.Dir("./public/"))))
	http.Handle("/assets/", r)
	http.ListenAndServe(":8080", r)
}
