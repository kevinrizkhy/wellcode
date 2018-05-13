package signin

import (
	"fmt"
	config "github.com/kevinrizkhy/Internal/config"
	db "github.com/kevinrizkhy/Internal/db"
	"html/template"
	"net/http"
)

var t *template.Template

func Index(w http.ResponseWriter, r *http.Request) {
	t, _ = template.ParseFiles(
		"app/views/dynamic/layout_v2.html",
		"app/views/dynamic/partial/beforeLogin/login.html",
		"app/views/dynamic/partial/beforeLogin/message.html",
		"app/views/dynamic/partial/beforeLogin/notification.html",
		"app/views/dynamic/partial/beforeLogin/task.html",
		"app/views/dynamic/partial/beforeLogin/userRightTop.html",
		"app/views/dynamic/partial/beforeLogin/navigationBar.html",
	)
	data := map[string]interface{}{
		"BaseURL":    config.Base_URL,
		"Title":      "SignIn",
		"redirectTo": "",
	}
	t.ExecuteTemplate(w, "layout", data)
}

func Sign(w http.ResponseWriter, r *http.Request) {
	email := r.FormValue("email")
	password := r.FormValue("password")
	rows, err := db.ExecuteQuery("SELECT * FROM t_user_wg WHERE email=$1 AND password=$2", email, password)
	if err == nil && len(rows) > 0 {
		fmt.Fprintln(w, "OK")
	} else {
		fmt.Fprintln(w, "Error - 400")
	}
}
