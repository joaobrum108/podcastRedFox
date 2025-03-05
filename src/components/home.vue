<template>
  <div
    class="container-avo"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      /* background-color: #1e1e1e; */
      background: linear-gradient(135deg, #1a1a1a, #1e1e1e);
    "
  >
    <div
      class="container"
      style="
        display: flex;
        flex-direction: row;
        width: 70%;
        height: 90vh;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
      "
    >
      <div class="containerDiv1" style="background-color: #303030; width: 50%">
        <div
          style="
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
          "
          class="imageRedfoxTv"
        >
          <img
            src="../imagesHome/1.svg"
            alt=""
            style="
              width: 50%;
              max-width: 200px;
              position: absolute;
              transform: translate(-50%, -50%);
              right: 45%;
              top: 50%;
            "
          />
        </div>
        <div class="box1">
          <div
            class="Informacoes"
            style="display: flex; flex-direction: column; gap: 3rem"
          >
            <span
              ><h1
                style="
                  color: #fff;
                  font-size: 2.9rem;
                  font-family: Poppins, sans-serif;
                  text-align: left;
                "
              >
                <span style="color: #bf0b2f">Podcasts</span> que te <br />
                inspiram a
                <span style="color: #bf0b2f">crescer</span>
              </h1>
            </span>
            <span>
              <p
                style="
                  color: #fff;
                  font-family: Poppins, sans-serif;
                  font-size: 1.5rem;
                "
              >
                O melhor podcast para expandir sua <br />
                mente, com conversas inspiradoras sobre <br />
                diversos temas que vão te surpreender e <br />
                motivar.
              </p>
            </span>
            <span style="display: flex; flex-direction: row; gap: 1rem">
              <span>
                <BotaoYt />
              </span>
              <span>
                <BotaoAApp />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="containerDiv2" style="width: 50%">
        <div
          style="
            width: 100%;
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4rem;
          "
          class="imageRedfoxTv"
        >
          <img
            class="imageFox2025"
            src="../imagesHome/1.svg"
            alt=""
            style="
              width: 50%;
              max-width: 200px;
              position: absolute;
              transform: translate(-50%, -50%);
              right: 32%;
            "
          />
          <span style="display: flex; flex-direction: row">
            <router-link
              class="cors"
              style="
                font-family: Poppins, sans-serif;
                color: #fff;
                font-size: 1.5rem;
              "
              to="/Podcast"
            >
              Podcast
            </router-link></span
          >
          <span
            ><router-link
              class="cors"
              style="
                font-family: Poppins, sans-serif;
                color: #fff;
                font-size: 1.5rem;
              "
              to="/quemsomos"
            >
              Quem Somos
            </router-link></span
          >
        </div>
        <div
          style="
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <img style="width: 60%" src="../imagesHome/4.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BotaoAApp from "./botaoAApp.vue";
import BotaoYt from "./botaoYt.vue";
</script>

<style scoped>
.imageFox2025 {
  display: none;
}
.cors {
  font-family: Poppins, sans-serif;
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.cors:hover {
  color: #bf0b2f !important;
}
.containerDiv2 {
  width: 50%;
  background-image: url(../imagesHome/3.svg);
  background-position: center;
  background-size: cover;
}
.interactive-button:hover {
  background-color: #a30926;
  transform: scale(1.05);
}

.interactive-button:active {
  background-color: #8a0720;
  transform: scale(0.95);
}
h1 {
  font-size: 3rem;
}
img {
  width: 30%;
}
.box1 {
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
}
@media (min-width: 410px) and (max-width: 1024px) {
  .container {
    width: 90% !important;
    height: auto !important;
    flex-direction: column !important;
  }

  .containerDiv1,
  .containerDiv2 {
    width: 100% !important;
    height: auto !important;
  }

  .containerDiv2 {
    order: -1;
    height: 29vh !important;
    display: flex;
    align-items: center;
  }

  .containerDiv1 {
    height: 60vh !important;
    text-align: center;
    justify-content: center;
  }
  .imageFox2025 {
    display: flex !important;
    max-width: 100px !important;
    position: absolute !important;
    transform: translate(-50%, -50%) !important;
    right: 54% !important;
    top: 10% !important;
  }

  h1 {
    text-align: center !important;
    font-size: 2rem !important;
  }

  p {
    font-size: 1.2rem !important;
  }

  .cors {
    font-size: 1.2rem !important;
  }

  img {
    display: none;
  }

  .box1 {
    gap: 1rem !important;
  }

  .Informacoes {
    gap: 1.5rem !important;
  }
}
</style>
