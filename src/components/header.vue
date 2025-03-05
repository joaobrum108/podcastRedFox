<template>
  <div class="header">
    <div class="header-content">
      <div class="logo">
        <span style="font-family: sans-serif">RedFox TV</span>
      </div>

      <div class="nav">
        <router-link style="font-family: sans-serif" to="/" class="nav-item"
          >Home</router-link
        >
        <router-link
          style="font-family: sans-serif"
          to="/about"
          class="nav-item"
          @click="handleClicked"
          >Quem Somos</router-link
        >
        <router-link
          style="font-family: sans-serif"
          to="/localizacao"
          class="nav-item"
          >Localização</router-link
        >
      </div>

      <div class="menu-icon" @click="toggleMenu">
        <span class="material-icons">menu</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClicked = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.header {
  background-color: #1a1a1a;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo span {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.05em;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-item.router-link-active {
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
}

.menu-icon {
  display: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav {
    display: none;
    flex-direction: column;
    background-color: #1a1a1a;
    position: absolute;
    top: 60px;
    right: 20px;
    padding: 10px;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .nav.open {
    display: flex;
  }

  .menu-icon {
    display: block;
  }
}
</style>
