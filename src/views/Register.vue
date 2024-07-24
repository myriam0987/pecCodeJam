<template>
    <div class="register-container">
        <h1>Registrarse</h1>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" v-model="email" id="email" required />
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" v-model="password" id="password" required />
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirmar Contraseña:</label>
                <input type="password" v-model="confirmPassword" id="confirmPassword" required />
            </div>
            <button type="submit" class="btn">Registrarse</button>
        </form>
        <router-link to="/login">Ya tengo una cuenta</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        async register() {
            if (this.password !== this.confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }

            try {
                // Aquí iría la lógica para registrar al usuario.
                // Puedes hacer una llamada a una API para registrar al usuario.

                // Simulando una inscripción exitosa
                const user = { email: this.email }; // Datos del usuario registrado

                // Guardar la información del usuario en el estado global si estás usando Vuex
                this.$store.commit('setUser', user);

                // Redirigir al usuario a la página principal
                this.$router.push('/');
            } catch (error) {
                // Manejar errores de registro
                alert('Error de registro');
            }
        }
    }
};
</script>

<style scoped>
.register-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f9f9f9;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}
</style>