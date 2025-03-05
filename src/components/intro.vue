<template>
  <div class="intro-screen">
    <video class="background-video" autoplay loop muted>
      <source :src="videoUrl" type="video/mp4" />
      Seu navegador não suporta vídeo.
    </video>

    <h1 class="logo"></h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import gsap from "gsap";

import videoUrl from "../videos/fg.mp4";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push("/home");
  }, 6000);
});
</script>

<style scoped>
.intro-screen {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.logo {
  color: #720228;
  font-size: 12rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  display: flex;
  z-index: 1;
}

.letter {
  display: inline-block;
}
</style>
