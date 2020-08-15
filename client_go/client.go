package main

import (
	"context"
	"fmt"
	"log"

	greet "github.com/grpc_go_vue/proto/greet"
	"google.golang.org/grpc"
)

func main() {
	fmt.Println("Halo saya client")
	opts := grpc.WithInsecure()
	cc, err := grpc.Dial("localhost:9090", opts)
	if err != nil {
		log.Fatalf("could not connect: %v", err)
	}
	defer cc.Close()
	c := greet.NewGreetServiceClient(cc)
	doUnary(c)
}

func doUnary(c greet.GreetServiceClient) {
	fmt.Println("Starting do unary")
	req := &greet.GreetRequest{
		Greeting: &greet.Greeting{
			Firtname: "Wisnu",
			Lastname: "Alipudin",
		},
	}

	res, err := c.Greet(context.Background(), req)
	if err != nil {
		log.Fatalf("Failed send to server", err)
	}

	fmt.Printf("result : %v", res.Result)
}
