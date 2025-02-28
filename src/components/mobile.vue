<script setup lang="ts">
import "swiper/swiper-bundle.css";
import Card from "./card.vue";
import micro from "./icons.vue";
import Duos from "../components/iconsduo.vue";
import Trofeu from "../components/iconstrofeu.vue";
import Forms from "../components/forms.vue";
import { RouterLink } from "vue-router";
const episode = "https://www.youtube.com/@redfoxtvoficial";
const handleClick = (episode) => window.open(episode);
</script>

<template>
  <div class="container with-bg">
    <div
      class="box is-flex is-flex-direction-column is-mobile is-justify-content-center is-fullwidth"
    >
      <div class="box2">
        <v-chip style="background-color: red; font-family: sans-serif"
          >RedFox TV Oficial</v-chip
        >
        <h1>
          Histórias de Sucesso <br />
          em Guarulhos
        </h1>
        <p>Entrevistas irreverentes com os maiores empresários da região</p>
        <div class="box2e3">
          <button @click="handleClick(episode)" class="btns1">
            <span class="material-icons" style="text-align: center"
              >notifications</span
            >
            Inscreva-se no Canal
          </button>
          <button @click="handleClick(episode)" class="btns">
            <span class="material-icons">play_arrow</span> Assista Agora
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="box3 is-flex is-flex-direction-column is-justify-content-center is-fullwidth"
  >
    <span style="text-align: center"
      ><h2 style="font-family: sans-serif; font-weight: 900; font-size: 2rem">
        Episódios em Destaque
        <p style="font-family: sans-serif; font-size: 0.9rem; color: #808080">
          Conheça as histórias inspiradoras dos empresários que estão
          transformando Guarulhos e <br />
          região
        </p>
      </h2></span
    >

    <div class="mobile-carousel"><Card /></div>
  </div>
  <div class="section-info">
    <h3
      style="
        font-family: sans-serif;
        font-weight: 900;
        font-size: 2rem;
        color: #000;
      "
    >
      Sobre o RedFox TV
      <p
        style="
          font-family: sans-serif;
          font-size: 0.9rem;
          color: #808080;
          font-weight: 600;
          padding: 0.5rem;
        "
      >
        Um programa que une entretenimento e conteúdo de valor, apresentando as
        histórias por trás dos maiores <br />
        empresários de Guarulhos
      </p>
    </h3>
    <div class="info2">
      <micro />
      <Duos />
      <Trofeu />
    </div>
    <button style="margin-top: 1rem" class="btnst">
      <RouterLink to="/QuemSomos">Quem Somos</RouterLink>
    </button>
  </div>
  <div class="sectionLeads" style="display: flex; align-items: center">
    <Forms />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container.with-bg {
  background-color: #272727;
  padding: 20px;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
}

chip {
  background-color: red;
  border-radius: 10px;
  width: 120px;
  display: flex;
  justify-content: center;
  height: 28px;
  align-items: center;
  color: #fff;
  font-size: 12px;
  font-family: sans-serif;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.box2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 15px;
  color: #ddd;
}

.box2e3 {
  display: flex;
  flex-direction: row;
  gap: 18px;
}

.box3 {
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  background-color: #ddd;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 2rem;
}

h1 {
  color: #ddd;
  text-align: center;
  font-family: sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
}
.section-info {
  background-color: #f9fafb;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  height: 50vh;
  width: 100%;
}
.info2 {
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.mobile-carousel {
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.desktop-cards {
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: 1.5rem;
}
.sectionLeads {
  background-color: #dddddd;
  width: 100%;
  height: 78vh;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btns1 {
  background-color: red;
  color: #fff;
}

.btns {
  background-color: #d3d3d3;
  color: #000;
}

.btns1:hover {
  background-color: darkred;
}

.btns:hover {
  background-color: #b0b0b0;
}

.btnst {
  background-color: red;
  color: #fff;
}

.btnst {
  background-color: #e40000;
  color: #ffffff;
}

.btnst:hover {
  background-color: darkred;
}

.btnst:hover {
  background-color: #fd2b2b;
}

@media (max-width: 1023px) {
  .sectionLeads {
    flex-direction: column;
    height: 100%;
  }
  .is-flex {
    flex-direction: column;
  }
  .section-info {
    display: flex;
    flex-direction: column;
    height: 100dvh;
  }
  .info2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100dvh;
  }

  .box2 h1 {
    flex-direction: column;
    font-size: 3rem;
  }

  .btns {
    padding: 8px 16px;
    font-size: 14px;
    width: auto;
  }

  .btns1 {
    padding: 8px 16px;
    font-size: 14px;
    width: auto;
  }

  .box3 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .mobile-carousel {
    display: flex;
    max-width: 450px;
    align-items: center;
    justify-content: center;
  }

  .desktop-cards {
    display: none;
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
