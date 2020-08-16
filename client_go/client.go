package main

import (
	"context"
	"fmt"
	"log"
	"time"
	"io"
	greet "github.com/grpc_go_vue/proto/greet"
	"google.golang.org/grpc"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
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
	// doUnary(c)
	doServerStreaming(c);
	// doClientStreaming(c);
}

// func doUnary(c greet.GreetServiceClient) {
// 	fmt.Println("Starting do unary")
// 	req := &greet.GreetRequest{
// 		Greeting: &greet.Greeting{
// 			Firtname: "Wisnu",
// 			Lastname: "Alipudin",
// 		},
// 	}

// 	res, err := c.Greet(context.Background(), req)
// 	if err != nil {
// 		log.Fatalf("Failed send to server", err)
// 	}

// 	fmt.Printf("result : %v", res.Result)
// }

func doServerStreaming(c greet.GreetServiceClient) {
	fmt.Println("Starting to do a Server Streaming RPC...")

	req := &greet.GreetManyTimesRequest{
		Greeting: &greet.Greeting{
			FirstName: "Stephane",
			LastName:  "Maarek",
		},
	}

	resStream, err := c.GreetManyTimes(context.Background(), req)
	if err != nil {
		log.Fatalf("error while calling GreetManyTimes RPC: %v", err)
	}
	for {
		msg, err := resStream.Recv()
		if err == io.EOF {
			// we've reached the end of the stream
			break
		}
		if err != nil {
			log.Fatalf("error while reading stream: %v", err)
		}
		log.Printf("Response from GreetManyTimes: %v", msg.GetResult())
	}

}

func doClientStreaming(c greet.GreetServiceClient) {
	fmt.Println("Starting to do a Client Streaming RPC...")

	requests := []*greet.LongGreetRequest{
		&greet.LongGreetRequest{
			Greeting: &greet.Greeting{
				FirstName: "Stephane",
			},
		},
		&greet.LongGreetRequest{
			Greeting: &greet.Greeting{
				FirstName: "John",
			},
		},
		&greet.LongGreetRequest{
			Greeting: &greet.Greeting{
				FirstName: "Lucy",
			},
		},
		&greet.LongGreetRequest{
			Greeting: &greet.Greeting{
				FirstName: "Mark",
			},
		},
		&greet.LongGreetRequest{
			Greeting: &greet.Greeting{
				FirstName: "Piper",
			},
		},
	}

	stream, err := c.LongGreet(context.Background())
	if err != nil {
		log.Fatalf("error while calling LongGreet: %v", err)
	}

	// we iterate over our slice and send each message individually
	for _, req := range requests {
		fmt.Printf("Sending req: %v\n", req)
		stream.Send(req)
		time.Sleep(1000 * time.Millisecond)
	}

	res, err := stream.CloseAndRecv()
	if err != nil {
		log.Fatalf("error while receiving response from LongGreet: %v", err)
	}
	fmt.Printf("LongGreet Response: %v\n", res)

}

func doUnary(c greet.GreetServiceClient) {
	fmt.Println("Starting to do a Unary RPC...")
	req := &greet.GreetRequest{
		Greeting: &greet.Greeting{
			FirstName: "Stephane",
			LastName:  "Maarek",
		},
	}
	res, err := c.Greet(context.Background(), req)
	if err != nil {
		log.Fatalf("error while calling Greet RPC: %v", err)
	}
	log.Printf("Response from Greet: %v", res.Result)
}

func doBiDiStreaming(c greet.GreetServiceClient) {
	fmt.Println("Starting to do a BiDi Streaming RPC...")

	// we create a stream by invoking the client
	stream, err := c.GreetEveryone(context.Background())
	if err != nil {
		log.Fatalf("Error while creating stream: %v", err)
		return
	}

	requests := []*greet.GreetEveryoneRequest{
		&greet.GreetEveryoneRequest{
			Greeting: &greet.Greeting{
				FirstName: "Stephane",
			},
		},
		&greet.GreetEveryoneRequest{
			Greeting: &greet.Greeting{
				FirstName: "John",
			},
		},
		&greet.GreetEveryoneRequest{
			Greeting: &greet.Greeting{
				FirstName: "Lucy",
			},
		},
		&greet.GreetEveryoneRequest{
			Greeting: &greet.Greeting{
				FirstName: "Mark",
			},
		},
		&greet.GreetEveryoneRequest{
			Greeting: &greet.Greeting{
				FirstName: "Piper",
			},
		},
	}

	waitc := make(chan struct{})
	// we send a bunch of messages to the client (go routine)
	go func() {
		// function to send a bunch of messages
		for _, req := range requests {
			fmt.Printf("Sending message: %v\n", req)
			stream.Send(req)
			time.Sleep(1000 * time.Millisecond)
		}
		stream.CloseSend()
	}()
	// we receive a bunch of messages from the client (go routine)
	go func() {
		// function to receive a bunch of messages
		for {
			res, err := stream.Recv()
			if err == io.EOF {
				break
			}
			if err != nil {
				log.Fatalf("Error while receiving: %v", err)
				break
			}
			fmt.Printf("Received: %v\n", res.GetResult())
		}
		close(waitc)
	}()

	// block until everything is done
	<-waitc
}

func doUnaryWithDeadline(c greet.GreetServiceClient, timeout time.Duration) {
	fmt.Println("Starting to do a UnaryWithDeadline RPC...")
	req := &greet.GreetWithDeadlineRequest{
		Greeting: &greet.Greeting{
			FirstName: "Stephane",
			LastName:  "Maarek",
		},
	}
	ctx, cancel := context.WithTimeout(context.Background(), timeout)
	defer cancel()

	res, err := c.GreetWithDeadline(ctx, req)
	if err != nil {

		statusErr, ok := status.FromError(err)
		if ok {
			if statusErr.Code() == codes.DeadlineExceeded {
				fmt.Println("Timeout was hit! Deadline was exceeded")
			} else {
				fmt.Printf("unexpected error: %v", statusErr)
			}
		} else {
			log.Fatalf("error while calling GreetWithDeadline RPC: %v", err)
		}
		return
	}
	log.Printf("Response from GreetWithDeadline: %v", res.Result)
}

