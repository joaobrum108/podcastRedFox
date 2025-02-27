<template>
  <div class="caixa">
    <div class="imagem-container">
      <img
        class="imagem-redonda"
        src="../assets/microfone.png"
        alt="Ícone de microfone"
      />
    </div>
    <h1 class="titulo">Entrevistas Autênticas</h1>
    <p class="descricao">
      Conversas descontraídas que revelam o lado humano dos empresários
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
