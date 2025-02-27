<!-- <template>
  <div>
    <input
      v-model="searchQuery"
      placeholder="Search YouTube"
      @input="refetch"
    />
    <ul>
      <li v-for="video in videos" :key="video.id.videoId">
        {{ video.snippet.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuery } from "@tanstack/vue-query";

const apiKey = "AIzaSyCjDeSj-U7KZl9v-A6E7R8Z0Z6QQKDX6Uc";
const searchQuery = ref("");

const fetchYouTubeSearch = async () => {
  if (!searchQuery.value) return { items: [] }; // Evita chamadas desnecessárias
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      searchQuery.value
    )}&key=${apiKey}`
  );
  if (!response.ok) throw new Error("Erro na requisição");
  return response.json();
};

const { data: youtubeData, refetch } = useQuery({
  queryKey: ["youtubeSearch", searchQuery],
  queryFn: fetchYouTubeSearch,
  enabled: false, // Desativa a busca automática ao montar o componente
  keepPreviousData: true, // Mantém os dados antigos enquanto carrega os novos
  staleTime: 1000 * 60 * 10, // Considera os dados "frescos" por 10 minutos
  cacheTime: 1000 * 60 * 60, // Cache por 1 hora
  retry: 1, // Tenta refazer a busca apenas 1 vez se falhar
});

const videos = computed(() => youtubeData.value?.items || []);
</script> -->
