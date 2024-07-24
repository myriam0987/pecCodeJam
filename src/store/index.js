import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null, // Estado para almacenar la información del usuario autenticado
    reservations: [] // Estado para almacenar las reservas
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.user = null;
    },
    addReservation(state, reservation) {
      state.reservations.push(reservation);
    },
    cancelReservation(state, id) {
      state.reservations = state.reservations.filter(r => r.id !== id);
    }
  },
  actions: {
    login({ commit }, user) {
      // Aquí podrías realizar la llamada a la API para autenticar al usuario
      // Por ahora, simplemente simula una autenticación exitosa
      commit('setUser', user);
    },
    addReservation({ commit }, reservation) {
      commit('addReservation', reservation);
    },
    cancelReservation({ commit }, id) {
      commit('cancelReservation', id);
    }
  },
  getters: {
    getUser: state => state.user,
    getReservations: state => state.reservations,
    isAuthenticated: state => !!state.user
  }
});
