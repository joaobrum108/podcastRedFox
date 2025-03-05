<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="celular">Celular:</label>
        <input type="text" id="celular" v-model="form.celular" required />
      </div>

      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="profissao">Profissão:</label>
        <input type="text" id="profissao" v-model="form.profissao" required />
      </div>

      <div class="form-group">
        <label for="mensagem">Mensagem (opcional):</label>
        <textarea id="mensagem" v-model="form.mensagem"></textarea>
      </div>

      <div class="form-group1">
        <button style="width: 22%; background-color: #970926" type="submit">
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  celular: "",
  email: "",
  profissao: "",
  mensagem: "",
});

const submitForm = () => {
  console.log("Formulário enviado:", form.value);

  form.value = {
    celular: "",
    email: "",
    profissao: "",
    mensagem: "",
  };
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  height: auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group1 {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.form-group {
  margin-bottom: 25px;
}
button {
  align-items: center !important;
  text-align: center;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #ffffff;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 5px;
}

button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #369f6e;
}
textarea {
  resize: none;
}

@media screen and (max-width: 600px) {
  button {
    width: 35% !important;
  }
}
</style>
