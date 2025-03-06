<script setup lang="js">
import Card from "./card.vue";
</script>

<template>
  <div class="Containermobile">
    <div class="caixa-informacao">
      <span>
        <img src="../imagesHome/1.svg" alt="" />
      </span>
      <span class="text">
        <h1>
          <span class="cors">Trajetórias</span> Reais, <br />
          Conquistas Incríveis - <br />
          Direto de <span class="cors">Guarulhos</span>
        </h1>
      </span>
      <span>
        <button class="btn-ouca">
          <i class="fas fa-headset"></i> OUÇA AGORA
        </button>
      </span>
    </div>
  </div>
  <div class="containerBanner-Yt"></div>
  <div class="ContainerCarrosel">
    <div class="caixaDText">
      <h1>
        <span class="cors">Inspire-se </span>com Episódios que <br />
        Estão Fazendo a <span class="cors">Diferença</span> !
      </h1>
    </div>
    <div class="Carrosel">
      <Card />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media (min-width: 375px) and (max-width: 728px) {
  .Containermobile {
    width: 100%;
    height: 58vh;
    background-image: url(../imagesHome/5.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5rem;
  }
  .caixa-informacao {
    width: 80%;
    height: 39dvh;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    gap: 2rem;
  }

  .text h1 {
    font-size: 1.2rem !important;
    font-family: "montserrat", sans-serif;
    color: #fff;
    align-items: right;
    justify-content: right;
  }
  .cors {
    color: #bf0b2f !important;
  }
  .btn-ouca {
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(45deg, #6e071c, #d40d35);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn-ouca:hover {
    opacity: 0.8;
  }
  .btn-ouca i {
    font-size: 1.2rem;
  }
  .containerBanner-Yt {
    width: 100%;
    height: 8dvh;
    background-image: url(../imagesHome/rt.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .ContainerCarrosel {
    width: 100vw;
    height: 50vh;
    background-color: #131313;
  }
  .caixaDText {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .caixaDText h1 {
    font-size: 1.5rem !important;
    font-family: "montserrat", sans-serif;
    color: #fff;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  .Carrosel {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
