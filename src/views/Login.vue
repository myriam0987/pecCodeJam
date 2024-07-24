<template>
  <div class="login-container">
    <h1 class="title">Iniciar Sesión</h1>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required placeholder="Ingrese su email" />
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" id="password" required placeholder="Ingrese su contraseña" />
      </div>
      <button type="submit" class="btn">Login</button>
    </form>
    <router-link to="/register" class="register-link">¿No tienes cuenta? Registrarse</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        // Aquí iría la lógica para autenticar al usuario.
        // Puedes hacer una llamada a una API o utilizar un servicio local.

        // Simulando una autenticación exitosa
        const user = { email: this.email }; // Datos del usuario autenticado

        // Guardar la información del usuario en el estado global si estás usando Vuex
        this.$store.commit('setUser', user);

        // Redirigir al usuario a la página principal
        this.$router.push('/');
      } catch (error) {
        // Manejar errores de autenticación
        alert('Error de autenticación');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  border-color: #007bff;
  outline: none;
}

.btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

.register-link {
  display: block;
  margin-top: 15px;
  text-align: center;
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
