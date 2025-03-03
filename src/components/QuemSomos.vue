<script setup>
import "../css/responsSec1.css";
import Forms2 from "./forms2.vue";
</script>

<template>
  <v-app>
    <section class="container">
      <div class="conteudo-left">
        <div style="">
          <img src="../images/Nav.png" alt="Logo do Podcast" />
        </div>
        <div class="tittleDescri">
          <h1 style="font-family: Poppins, sans-serif; font-weight: bold">
            O Podcast Que <span style="color: #bf0b2f">Transforma</span
            ><br /><span style="color: #bf0b2f">Negócios</span> – faça parte!
          </h1>
          <p style="font-family: Poppins, sans-serif; color: #c9c9c9">
            Adilson Junior lidera as conversas, trazendo <br />
            <span style="font-weight: bold"> curiosidade e paixão </span>por
            cada episódio. Conte a <br />
            sua história também!
          </p>
        </div>
        <div>
          <button class="custom-button">Saiba como participar</button>
        </div>
      </div>
    </section>
    <section class="infoBanner"></section>
    <div class="infobanner2">
      <div style="color: #fff; text-align: center">
        <h2
          style="
            font-family: Poppins, sans-serif;
            font-size: 2.5rem;
            font-weight: bold;
          "
        >
          Os <span style="color: #bf0b2f">maiores players</span> do <br />
          mercado já estiveram aqui
        </h2>
        <br />
        <p style="font-family: Poppins, sans-serif; color: #c9c9c9">
          Um mar de conhecimento inserido em um simples <br />
          bate-papo, conheça a Redfox TV
        </p>
      </div>
      <div
        class="carrosel"
        style="
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: center;
          height: 250px;
        "
      >
        <div class="p1" style="align-self: flex-start">
          <img src="../images/Convidado-1.png" alt="convidado" />
        </div>
        <div class="p1" style="align-self: flex-end">
          <img src="../images/Convidado-2.png" alt="convidado" />
        </div>
        <div class="p1" style="align-self: flex-start">
          <img src="../images/Convidado-3.png" alt="convidado" />
        </div>
        <div class="p1" style="align-self: flex-end">
          <img src="../images/Convidado-4.png" alt="convidado" />
        </div>
      </div>

      <button class="custom-button">Quero contar minha história</button>
    </div>
    <div class="infoFormulario">
      <v-container
        style="
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 35px;
          min-height: 300px;
          height: auto;
          flex-grow: 1;
          padding: 20px;
        "
      >
        <h1 style="font-family: Poppins, sans-serif; font-weight: bold">
          Sua empresa tem uma <br />
          história incrível?
        </h1>
        <h3 style="color: #fff; font-family: Poppins, sans-serif">
          Preencha o formulário para nos conhecermos
        </h3>
        <div class="forms2" style="width: 30%"><Forms2 /></div>
      </v-container>
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
  gap: 25px;
}

.container img {
  max-width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: contain;
}

.tittleDescri h1 {
  font-size: 2.5rem;
  text-align: left;
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
  background-color: #d40d35;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-button:hover {
  background-color: #a00b2a;
  transform: scale(1.05);
}

.custom-button:active {
  background-color: #800922;
  transform: scale(0.95);
}

.custom-button2 {
  color: #fff;
  border-radius: 5px;
  background-color: #d40d35;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-button2:hover {
  background-color: #a00b2a;
  transform: scale(1.05);
}

.custom-button2:active {
  background-color: #800922;
  transform: scale(0.95);
}

.infoBanner {
  width: 100%;
  height: 198px;
  background-position: center;
  background-image: url(../images/Banner-Podcast.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.infobanner2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background-color: #090909;
  height: 100vh;
}
.infoFormulario {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  height: 75vh;
  width: 100%;
  background-color: #d40d35;
}
</style>
