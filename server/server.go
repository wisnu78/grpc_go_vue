package main

import (
	"context"
	"fmt"
	"log"
	"net"

	greet "github.com/grpc_go_vue/proto/greet"
	"google.golang.org/grpc"
)

type server struct{}

func (*server) Greet(ctx context.Context, request *greet.GreetRequest) (*greet.GreetResponse, error) {
	firstname := request.GetGreeting().Firtname
	lastname := request.GetGreeting().Lastname
	result := "Halo " + firstname + " " + lastname
	res := &greet.GreetResponse{
		Result: result,
	}

	return res, nil
}

func main() {
	port := "9090"
	fmt.Printf("Server RPC runing on port " + port)

	lis, err := net.Listen("tcp", "127.0.0.1:"+port)
	if err != nil {
		log.Fatalf("Failed to listen ", err)
	}

	s := grpc.NewServer()

	greet.RegisterGreetServiceServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to connec server", err)
	}
}
