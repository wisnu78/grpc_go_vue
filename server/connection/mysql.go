package main

import (
	"database/sql"
	"log"
)

func connect() *sql.DB {
	db, err := sql.Open("mysql", "root@tcp(1270.0.0.1:3306)/database")

	if err != nil {
		log.Fatal(err)
	}

	return db
}
