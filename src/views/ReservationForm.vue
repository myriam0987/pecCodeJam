<template>
    <div>
        <h2>Reservar Área</h2>
        <form @submit.prevent="submitReservation">
            <div>
                <label for="taskType">Tipo de Tarea:</label>
                <select v-model="reservation.taskType" id="taskType">
                    <option value="individual">Individual</option>
                    <option value="grupal">Grupal</option>
                </select>
            </div>
            <div>
                <label for="area">Área:</label>
                <select v-model="reservation.area" id="area">
                    <!-- Áreas para "Trabajo" -->
                    <optgroup label="Trabajo" v-if="reservation.taskType === 'individual'">
                        <option value="puestos">Puesto de Trabajo</option>
                        <option value="cabinas">Cabinas Telefónicas</option>
                        <option value="banos">Baños</option>
                    </optgroup>

                    <!-- Áreas para "Recreación" -->
                    <optgroup label="Recreación" v-if="reservation.taskType === 'grupal'">
                        <option value="video-games">Sector de Videojuegos</option>
                        <option value="ludoteca">Mesas de Ludoteca</option>
                        <option value="sillones">Sillones de Descanso</option>
                        <option value="cocina">Cocina</option>
                        <option value="casino">Casino de Uso Grupal</option>
                        <option value="salas-reunion">Salas de Reunión</option>
                    </optgroup>
                </select>
            </div>
            <div>
                <label for="date">Fecha:</label>
                <input type="date" v-model="reservation.date" id="date" />
            </div>
            <div>
                <label for="time">Hora:</label>
                <input type="time" v-model="reservation.time" id="time" />
            </div>
            <div>
                <label for="duration">Duración (horas):</label>
                <input type="number" v-model.number="reservation.duration" id="duration" min="1" max="4" />
            </div>
            <button type="submit">Reservar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reservation: {
                taskType: 'individual', // Establecer tipo de tarea por defecto
                area: 'puestos',
                date: '',
                time: '',
                duration: 1
            }
        };
    },
    methods: {
        submitReservation() {
            console.log('Duración:', this.reservation.duration); // Agregado para depuración
            if (this.reservation.duration > 4) {
                alert('La duración máxima permitida es de 4 horas.');
                return; // Evita que se envíe el formulario
            }

            const newReservation = {
                ...this.reservation,
                id: Date.now() // Genera un ID único para la reserva
            };
            this.$store.dispatch('addReservation', newReservation);
            // Opcional: Redirigir a otra página o mostrar un mensaje de éxito
            this.$router.push('/');
        }
    }
};
</script>

<style scoped>
/* Estilos opcionales para mejorar la apariencia del formulario */
div {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
</style>
