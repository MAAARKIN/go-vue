package models

// Representa o cliente a ser cadastrado.
type Cliente struct {
	Id    int    `json: "id"`
	Nome  string `json: "nome"`
	Idade int    `json: "idade"`
}
