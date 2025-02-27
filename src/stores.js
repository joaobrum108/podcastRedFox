import { defineStore } from "pinia";

export const usePodcastStore = defineStore("podcast", {
  state: () => ({
    episodes: [],
  }),
  actions: {
    async fetchEpisodes() {
      try {
        const apiKey = "AIzaSyCjDeSj-U7KZl9v-A6E7R8Z0Z6QQKDX6Uc";
        const channelId = "UC7zo-vneSqQ1RImqZpV5Xzg";
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`
        );

        if (!response.ok) {
          console.log(response);
          throw new Error("Erro ao buscar episódios na pasta stores");
        }

        const data = await response.json();
        this.episodes = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high.url,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        }));
      } catch (error) {
        console.error("Erro ao buscar episódios:", error);
      }
    },
  },
});
