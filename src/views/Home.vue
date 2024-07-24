<template>
  <div class="home-container">
    <img src="@/assets/logo_r.jpg" alt="Bienvenida" class="welcome-image" />
    <h1 class="title">Bienvenido a la App de Reservas de la Oficina</h1>
    <p class="description">Utilice esta aplicación para gestionar sus reservas de áreas de trabajo y recreación.</p>
    <nav class="nav-menu">
      <ul>
        <li>
          <router-link to="/work-reservations" class="nav-link">Reservar Área Individual</router-link>
        </li>
        <li>
          <router-link to="/recreation-reservations" class="nav-link">Reservar Área Grupal</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.welcome-image {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
}

.description {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
}

.nav-menu {
  margin: 20px 0;
}

.nav-menu ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-menu ul li {
  display: inline;
}

.nav-link {
  text-decoration: none;
  color: #007bff;
  font-size: 1.2em;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #e7f0ff;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #007bff;
  color: #fff;
}
</style>
