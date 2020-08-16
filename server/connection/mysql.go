package main

import (
	"fmt"

	"github.com/jinzhu/gorm"
)

func mysqli() *gorm.DB {
	db, err := gorm.Open("mysql", "root@tcp(127.0.0.1:3306)/grpc_go_vue?charset=utf8&parseTime=True")
	if err != nil {
		fmt.Println(err.Error())
		panic("failed to connect database")
	}
	// defer db.Close()

	// Migrate the schema
	// db.AutoMigrate(&model.User{})
	//user := model.User{Name: "Wisnu", Email: "Wisnu@email.com"}
	//db.Create(&user)
	return db
}
