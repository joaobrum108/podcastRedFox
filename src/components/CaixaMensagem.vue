<!-- <template>
  <v-container class="d-flex justify-center">
    <v-card
      class="pa-5"
      elevation="6"
      max-width="500"
      style="border-radius: 15px; background-color: #f8f9fa"
    >
      <v-card-title class="text-h5 text-center" style="color: #2c3e50">
        Entre em Contato
      </v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="name"
            label="Nome"
            variant="outlined"
            :rules="[rules.required]"
            class="mb-4"
            style="background-color: #fff"
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="E-mail"
            variant="outlined"
            :rules="[rules.required, rules.email]"
            class="mb-4"
            style="background-color: #fff"
          ></v-text-field>

          <v-textarea
            v-model="message"
            label="Mensagem"
            variant="outlined"
            :rules="[rules.required]"
            class="mb-4"
            style="background-color: #fff"
          ></v-textarea>

          <v-btn
            color="primary"
            block
            class="mt-4"
            :disabled="!valid"
            @click="submitForm"
            style="background-color: #3498db; color: white; font-weight: bold"
          >
            Enviar
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const valid = ref(false);
const name = ref("");
const email = ref("");
const message = ref("");
const form = ref(null);

const rules = {
  required: (value) => !!value || "Campo obrigatório",
  email: (value) => /.+@.+\..+/.test(value) || "E-mail inválido",
};

const submitForm = () => {
  if (form.value?.validate()) {
    alert("Formulário enviado!");
  }
};
</script> -->
