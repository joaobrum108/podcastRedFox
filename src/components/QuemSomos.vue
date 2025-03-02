<script>
import Botao from './btn.vue';
</script>

<template>
  <v-app>
    <section class="container">
      <div class="conteudo-left">
        <div>
          <img src="../images/Nav.png" alt="Logo do Podcast">
        </div>
        <div class="tittleDescri">
          <h1>O Podcast Que Transforma<br>Negócios – faça parte!</h1>
          <p>
            Adilson Junior lidera as conversas, trazendo <br> curiosidade e paixão por cada episódio. Conte a <br> sua história também!
          </p>
        </div>
        <div>
            <button class="custom-button">
            Saiba como participar
            </button>
        </div>
      </div>
    </section>
    <section class="infoBanner">
    </section>
    <div class="infobanner2">
        <div>
            <h2>Os maiores players do <br> mercado já estiveram aqui</h2>
            <br>
            <p>Um mar de conhecimento inserido em um simples <br>  bate-papo, conheça a Redfox TV</p>
        </div>
        <div>
            carrosel
        </div>
            <button class="custom-button2">
            Saiba como participar
            </button>
    </div>
  </v-app>
</template>

<style scoped>
.container {
  min-height: 100vh;
  background-image: url(../images/Fundo-LP.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.conteudo-left {
  display: flex;
  flex-direction: column;
  color: white;
  max-width: 800px;
  padding: 20px;
  margin-left: 10%;
}

.container img {
  max-width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: contain;
}

.tittleDescri h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.tittleDescri p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.custom-button {
    color: #fff;
    border-radius: 5px;
    background-color: #D40D35;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-button:hover {
    background-color: #A00B2A;
    transform: scale(1.05);
}

.custom-button:active {
    background-color: #800922;
    transform: scale(0.95);
}

.custom-button2 {
    color: #fff;
    border-radius: 5px;
    background-color: #D40D35;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-button2:hover {
    background-color: #A00B2A;
    transform: scale(1.05);
}

.custom-button2:active {
    background-color: #800922;
    transform: scale(0.95);
}

.infoBanner{
    width: 100%;
    height: 198px;
    background-position: center;
    background-image: url(../images/Banner-Podcast.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.infobanner2{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    background-color: #090909;
    height: 85vh;
}
</style>