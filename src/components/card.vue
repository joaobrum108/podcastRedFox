<template>
  <div>
    <div class="container">
      <div v-if="videos.length === 0">Carregando episódios...</div>
      <div v-else class="cards-wrapper" ref="cardsWrapper">
        <div
          v-for="episode in videos"
          :key="episode.id"
          class="card-container"
          @mouseover="isHovering = episode.id"
          @mouseleave="isHovering = null"
        >
          <div class="card-image-container">
            <img :src="episode.thumbnail" alt="Thumbnail" class="card-image" />
            <div v-if="isHovering === episode.id" class="card-overlay">
              <button class="card-button" @click="handleClick(episode)">
                Acessar
              </button>
            </div>
          </div>
          <div class="card-content">
            <h2 class="card-title">{{ episode.title }}</h2>
            <p class="card-description">{{ episode.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { usePodcastStore } from "../stores";

const videos = ref([]);
const isHovering = ref(null);
const cardsWrapper = ref(null);

const podcastStore = usePodcastStore();

let carouselInterval;

const startCarousel = () => {
  carouselInterval = setInterval(() => {
    if (cardsWrapper.value) {
      const firstCard = cardsWrapper.value.firstElementChild;
      cardsWrapper.value.style.transition = "transform 0.8s ease";
      cardsWrapper.value.style.transform = `translateX(-${firstCard.offsetWidth}px)`;

      setTimeout(() => {
        cardsWrapper.value.style.transition = "none";
        cardsWrapper.value.appendChild(firstCard);
        cardsWrapper.value.style.transform = "translateX(0)";
      }, 800);
    }
  }, 3000);
};

const stopCarousel = () => {
  clearInterval(carouselInterval);
};

const handleClick = (episode) => {
  window.open(episode.link);
};

onMounted(async () => {
  await podcastStore.fetchEpisodes();
  videos.value = podcastStore.episodes;

  if (window.innerWidth >= 375 && window.innerWidth <= 728) {
    startCarousel();
  }

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  stopCarousel();
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  if (window.innerWidth >= 375 && window.innerWidth <= 728) {
    if (!carouselInterval) {
      startCarousel();
    }
  } else {
    stopCarousel();
    carouselInterval = null;
  }
};
</script>

<style scoped>
@media (min-width: 375px) and (max-width: 728px) {
  .container {
    max-width: 728;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cards-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: 16px;
    overflow: hidden;
  }

  .card-container {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    flex: 0 0 auto;
    width: 100%;
  }

  .card-container:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }

  .card-image-container {
    width: 100% !important;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(3, 99, 88, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-button {
    padding: 8px 16px;
    background: #036358;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }

  .card-content {
    display: none;
  }

  .card-title {
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: #036358;
  }

  .card-description {
    font-size: 0.875rem;
    color: #666;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
