<template>
  <div>
    <v-container>
      <div v-if="videos.length === 0">Carregando episódios...</div>
      <div v-else>
        <v-row>
          <v-col v-for="episode in videos" :key="episode.id" cols="12" md="4">
            <v-hover v-slot:default="{ isHovering, props }">
              <v-card
                class="mx-auto card-container"
                max-width="344"
                v-bind="props"
                :class="{ 'card-hover': isHovering }"
              >
                <v-img
                  :src="episode.thumbnail"
                  cover
                  class="card-image"
                ></v-img>

                <v-card-text class="card-content">
                  <h2 class="text-h4 font-weight-bold text-primary mb-4">
                    {{ episode.title }}
                  </h2>
                  <p class="text-body-1 text-secondary description">
                    {{ episode.description }}
                  </p>
                </v-card-text>

                <v-overlay
                  :model-value="isHovering"
                  class="align-center justify-center"
                  scrim="#036358"
                  contained
                >
                  <v-btn
                    variant="flat"
                    color="primary"
                    @click="handleClick(episode)"
                  >
                    Acessar
                  </v-btn>
                </v-overlay>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePodcastStore } from "../stores";

const videos = ref([]);

const podcastStore = usePodcastStore();

onMounted(async () => {
  await podcastStore.fetchEpisodes();
  videos.value = podcastStore.episodes;
  console.log("component card montadoi");
});

const handleClick = (episode) => {
  window.open(episode.link);
};
</script>

<style scoped>
.card-container {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.card-container.card-hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.card-image {
  height: 200px;
}

.card-content {
  padding: 16px;
}

.card-content h2 {
  font-family: sans-serif;
  font-size: 1.75rem;
  line-height: 1.2;
}

.card-content p {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
}

.card-rating {
  padding: 16px;
  background-color: #f5f5f5;
}

.description {
  font-family: sans-serif;
}

@media (max-width: 1023px) {
  .card-container {
    max-width: auto;
  }

  .card-content h2 {
    font-size: 1rem;
  }

  .card-content p {
    font-size: 0.9rem;
  }
}
</style>
