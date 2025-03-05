<template>
  <button class="download-button" @click="downloadApp">
    Clique e assista!
  </button>
</template>

<script setup>
const downloadApp = () => {
  window.location.href = "https://www.youtube.com/@redfoxtvoficial";
};
</script>

<style scoped>
.download-button {
  background-color: #c10c30;
  font-weight: bold;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #b30121;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
