import React, { useRef, useState } from "react";
import { v4 } from "uuid";
import { AddButton, Container, Product, MeuButton } from "./Styles";

function App() {
  const inputRef = useRef();
  const [produtos, setProdutos] = useState([]);

  function cliqueiNoBotao() {
    adicionarProduto();
  }

  function adicionarProduto() {
    const nomeProduto = inputRef.current.value.trim();

    // Verifica se o nome do produto é válido
    if (nomeProduto !== "") {
      setProdutos([{ id: v4(), nome: nomeProduto }, ...produtos]);
      inputRef.current.value = "";
    }
    // Caso contrário, você pode exibir uma mensagem de erro ou tomar outra ação desejada.
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      adicionarProduto();
    }
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input
        placeholder="produtos..."
        ref={inputRef}
        onKeyPress={handleKeyPress}
      />
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

      {produtos.map((produto) => (
        <Product key={produto.id}>
          <p>{produto.nome}</p>
          <MeuButton onClick={() => deletarProduto(produto.id)}>🗑️</MeuButton>
        </Product>
      ))}
    </Container>
  );
}

export default App;
