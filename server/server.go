package main

import (
	"context"
	"fmt"
	"io"
	"log"
	"net"
	"strconv"
	"time"

	"google.golang.org/grpc/codes"
	// "google.golang.org/grpc/credentials"
	"google.golang.org/grpc/status"


	greet "github.com/grpc_go_vue/proto/greet"
	// "github.com/grpc_go_vue/server/model"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"google.golang.org/grpc"
)

var db *gorm.DB
var err error

type server struct {
}

func mysqli() *gorm.DB {
	db, err := gorm.Open("mysql", "root@tcp(127.0.0.1:3306)/grpc_go_vue?charset=utf8&parseTime=True")
	if err != nil {
		fmt.Println(err.Error())
		panic("failed to connect database")
	}
	// defer db.Close()

	// Migrate the schema
	// db.AutoMigrate(&model.User{})
	// user := model.User{Name: "Wisnu", Email: "Wisnu@email.com"}
	// db.Create(&user)
	return db
}

// func (*server) Greet(ctx context.Context, request *greet.GreetRequest) (*greet.GreetResponse, error) {
// 	firstname := request.GetGreeting().Firtname
// 	lastname := request.GetGreeting().Lastname
// 	result := "Halo " + firstname + " " + lastname
// 	res := &greet.GreetResponse{
// 		Result: result,
// 	}
// 	user := model.User{Name: request.Greeting.GetFirtname(), Email: lastname}
// 	mysqli().Create(&user)
// 	return res, nil
// }

func (*server) Greet(ctx context.Context, req *greet.GreetRequest) (*greet.GreetResponse, error) {
	fmt.Printf("Greet function was invoked with %v\n", req)
	firstName := req.GetGreeting().GetFirstName()
	result := "Hello " + firstName
	res := &greet.GreetResponse{
		Result: result,
	}
	return res, nil
}

func (*server) GreetManyTimes(req *greet.GreetManyTimesRequest, stream greet.GreetService_GreetManyTimesServer) error {
	fmt.Printf("GreetManyTimes function was invoked with %v\n", req)
	firstName := req.GetGreeting().GetFirstName()
	for i := 0; i < 10; i++ {
		result := "Hello " + firstName + " number " + strconv.Itoa(i)
		res := &greet.GreetManytimesResponse{
			Result: result,
		}
		stream.Send(res)
		time.Sleep(1000 * time.Millisecond)
	}
	return nil
}

func (*server) LongGreet(stream greet.GreetService_LongGreetServer) error {
	fmt.Printf("LongGreet function was invoked with a streaming request\n")
	result := ""
	for {
		req, err := stream.Recv()
		if err == io.EOF {
			// we have finished reading the client stream
			return stream.SendAndClose(&greet.LongGreetResponse{
				Result: result,
			})
		}
		if err != nil {
			log.Fatalf("Error while reading client stream: %v", err)
		}

		firstName := req.GetGreeting().GetFirstName()
		result += "Hello " + firstName + "! "
	}
}

func (*server) GreetEveryone(stream greet.GreetService_GreetEveryoneServer) error {
	fmt.Printf("GreetEveryone function was invoked with a streaming request\n")

	for {
		req, err := stream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			log.Fatalf("Error while reading client stream: %v", err)
			return err
		}
		firstName := req.GetGreeting().GetFirstName()
		result := "Hello " + firstName + "! "

		sendErr := stream.Send(&greet.GreetEveryoneResponse{
			Result: result,
		})
		if sendErr != nil {
			log.Fatalf("Error while sending data to client: %v", sendErr)
			return sendErr
		}
	}

}

func (*server) GreetWithDeadline(ctx context.Context, req *greet.GreetWithDeadlineRequest) (*greet.GreetWithDeadlineResponse, error) {
	fmt.Printf("GreetWithDeadline function was invoked with %v\n", req)
	for i := 0; i < 3; i++ {
		if ctx.Err() == context.Canceled {
			// the client canceled the request
			fmt.Println("The client canceled the request!")
			return nil, status.Error(codes.Canceled, "the client canceled the request")
		}
		time.Sleep(1 * time.Second)
	}
	firstName := req.GetGreeting().GetFirstName()
	result := "Hello " + firstName
	res := &greet.GreetWithDeadlineResponse{
		Result: result,
	}
	return res, nil
}


func main() {
	// db, err := gorm.Open("mysql", "root@tcp(127.0.0.1:3306)/grpc_go_vue?charset=utf8&parseTime=True")
	// user := model.User{Name: "Wisnu", Email: "Wisnu@email.com"}
	// db.Create(&user)
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
