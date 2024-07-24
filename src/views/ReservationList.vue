<template>
    <div class="reservation-list">
        <h2 class="list-title">Lista de Reservas</h2>
        <ul>
            <li v-for="reservation in reservations" :key="reservation.id">
                {{ reservation.name }} - {{ reservation.date }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reservations: [] // Aquí se guardarán las reservas
        };
    },
    created() {
        // Cargar datos de reservas (puedes reemplazar esto con una llamada a una API si es necesario)
        this.loadReservations();
    },
    methods: {
        loadReservations() {
            // Simulando carga de datos
            this.reservations = [
                { id: 1, name: 'Reserva 1', date: '2024-07-24' },
                { id: 2, name: 'Reserva 2', date: '2024-07-25' }
            ];
        }
    }
};
</script>

<style scoped>
/* Estilos para la lista de reservas */
.reservation-list {
    margin-top: 20px;
}

.list-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
</style>