<template>
    <div class="work-reservation-card">
        <img src="@/assets/logo_r.jpg" alt="Banner de Reservas de Trabajo" class="banner-image" />
        <div class="content">
            <h1 class="title">Reservas de Trabajo</h1>
            <div class="form-section">
                <ReservationForm @reserve="handleReserve" />
            </div>
            <div class="list-section">
                <ReservationList :reservations="workReservations" />
            </div>
        </div>
    </div>
</template>

<script>
import ReservationForm from './ReservationForm.vue';
import ReservationList from './ReservationList.vue';

export default {
    components: {
        ReservationForm,
        ReservationList
    },
    data() {
        return {
            reservations: [] // Aquí se guardarán todas las reservas
        };
    },
    created() {
        this.loadReservations();
    },
    methods: {
        loadReservations() {
            // Simulando carga de datos
            this.reservations = [
                { id: 1, name: 'Reserva de Trabajo 1', date: '2024-07-24', type: 'work' },
                { id: 2, name: 'Reserva Recreativa 1', date: '2024-07-25', type: 'recreation' }
            ];
        },
        handleReserve(newReservation) {
            // Agregar la nueva reserva a la lista
            this.reservations.push(newReservation);
        }
    },
    computed: {
        workReservations() {
            return this.reservations.filter(reservation => reservation.type === 'work');
        }
    }
};
</script>

<style scoped>
/* Estilos generales para el contenedor del componente */
.work-reservation-card {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Estilo del banner de imagen */
.banner-image {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #ddd;
}

/* Estilo del contenido */
.content {
    padding: 20px;
}

/* Estilo del título principal */
.title {
    text-align: center;
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
}

/* Sección del formulario */
.form-section {
    margin-bottom: 20px;
}

/* Estilos para el formulario dentro del componente */
form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Espaciado entre los elementos del formulario */
form div {
    margin-bottom: 20px;
}

/* Estilo para las etiquetas */
label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
}

/* Estilo para inputs y selects */
input,
select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
    transition: border-color 0.3s;
}

input:focus,
select:focus {
    border-color: #007bff;
    outline: none;
}

/* Estilo para el botón */
button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}

/* Sección de la lista */
.list-section {
    margin-top: 20px;
}
</style>