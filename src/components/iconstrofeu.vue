<template>
  <div class="caixa">
    <div class="imagem-container">
      <img
        class="imagem-redonda"
        src="../assets/trofeu.png"
        alt="Ícone de microfone"
      />
    </div>
    <h1 class="titulo">Histórias de Sucesso</h1>
    <p class="descricao">
      Inspiração e aprendizado com quem já conquistou seu espaço
    </p>
  </div>
</template>

<style scoped>
.caixa {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 300px;
}

.imagem-container {
  width: 70px;
  height: 70px;
  background-color: #ff7f7f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.imagem-redonda {
  max-width: 60%;
  height: auto;
}

.titulo {
  font-family: sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.descricao {
  font-family: sans-serif;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}
</style>
