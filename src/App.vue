<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <!-- Agrega más enlaces de navegación aquí si es necesario -->
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
/* Estilo global para la aplicación */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

/* Estilo para la barra de navegación */
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

/* Estilo para los enlaces de navegación */
.nav-link {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

/* Estilo para los enlaces activos */
.nav-link.router-link-exact-active {
  color: #ffffff;
  background-color: #42b983;
}

/* Estilo para los enlaces en hover */
.nav-link:hover {
  background-color: #f0f0f0;
  color: #42b983;
}
</style>
