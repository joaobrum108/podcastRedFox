<template>
  <v-container class="container">
    <v-card class="info-container">
      <div class="info-content">
        <h1 class="info-titulo">Participe do Programa</h1>
        <p class="info-descricao">
          Compartilhe sua história de sucesso e inspire <br />
          outros empresários. Entre em contato conosco!
        </p>
        <div class="info-contato">
          <div class="icon-container">
            <div class="icon-item">
              <span class="material-icons">place</span>
              <p>Guarulhos, SP</p>
            </div>

            <div class="icon-item">
              <span class="material-icons">phone</span>
              <p>(11) 99999-9999</p>
            </div>

            <div class="icon-item">
              <span class="material-icons">email</span>
              <p>contato@redfox.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </v-card>

    <v-card class="form-container">
      <v-card-title class="form-titulo">Formulário de Contato</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="enviarFormulario">
          <v-text-field
            style="height: 3rem"
            v-model="formulario.nome"
            label="Nome"
            outlined
            required
            class="modern-input"
          ></v-text-field>
          <v-text-field
            v-model="formulario.email"
            label="E-mail"
            outlined
            required
            type="email"
            class="modern-input"
          ></v-text-field>
          <v-textarea
            v-model="formulario.mensagem"
            label="Mensagem"
            outlined
            required
            class="modern-input"
          ></v-textarea>
          <button @click="enviarFormulario" type="submit" class="modern-btn">
            Enviar
          </button>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const formulario = ref({
  nome: "",
  email: "",
  mensagem: "",
});

const enviarFormulario = async () => {
  alert("Formulário enviado com sucesso!");
  console.log("Dados do formulário:", formulario.value);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;

  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.info-container {
  flex: 0.4;
  color: #fff;
  height: 580px;
  padding: 2rem;
  border-radius: 10px;
  background-color: #ca0808;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-titulo {
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.info-descricao {
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.info-contato {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-contato p {
  font-family: sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin: 0;
}

.info-icone {
  font-family: sans-serif;
  font-size: 1rem;
  color: white;
}

.form-container {
  flex: 0.5;
  padding: 2rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-titulo {
  font-family: sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.modern-input {
  font-family: sans-serif;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.modern-input .v-input__slot {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.modern-input .v-input__slot:hover {
  border-color: #ca0808;
}

.modern-input .v-input__slot:focus-within {
  border-color: #ca0808;
  box-shadow: 0 0 0 2px rgba(202, 8, 8, 0.2);
}

.modern-input .v-label {
  color: #757575;
  font-size: 0.9rem;
}

.modern-input .v-input__control {
  padding: 0.5rem;
}

.modern-btn {
  background-color: #ca0808;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  padding: 0.75rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.modern-btn:hover {
  background-color: #b20707;
  transform: translateY(-2px);
}

.modern-btn:active {
  transform: translateY(0);
}

.modern-btn {
  background-color: red;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: block;
  width: 100%;
  margin: 10px 0;
}

.modern-btn:hover {
  background-color: darkred;
  transform: scale(1.05);
}

.modern-btn:active {
  transform: scale(0.95);
}

.icon-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.icon-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: #fff;
}

.material-icons {
  font-size: 24px;
  color: #fff;
}

@media (max-width: 1023px) {
  .container {
    flex-direction: column;
    padding: 4rem;
    height: 83%;
  }

  .form-container {
    flex: 0.6;
    width: 100%;
  }

  .info-container {
    flex: 0.2;
    padding: 1.5rem;
  }

  .info-titulo {
    font-size: 1.75rem;
  }

  .info-descricao {
    font-size: 0.9rem;
  }

  .info-contato p {
    font-size: 0.9rem;
  }

  .form-container {
    padding: 1.5rem;
  }

  .form-titulo {
    font-size: 1.25rem;
  }

  .modern-input .v-label {
    font-size: 0.8rem;
  }

  .modern-input .v-input__control {
    padding: 0.25rem;
  }

  .modern-btn {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
</style>
