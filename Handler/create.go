package handler

import (
	"context"
)

type User struct {
	name       string
	email      string
	zkToken    string
	collection []interface{}
}

type Nft struct {
	nftName        string
	nftDescription string
	nftPath        string
}

type Trade interface {
	Ask()
	Bid()
	ownershipTransfer()
}

func createUser(ctx context.Context) context.Context {

}
