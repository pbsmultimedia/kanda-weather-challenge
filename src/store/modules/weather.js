export default {
  namespaced: true,
  state: {
    rainProbability: Math.floor(Math.random() * 100),
    temperature: Math.floor(Math.random() * 40),
    humidity: Math.floor(Math.random() * 100),
    wind: Math.floor(Math.random() * 200)
  },
  mutations: {
    // ...
    setrainProbability(state, payload) {
      state.rainProbability = payload;
    }
  },
  getters: {
    rainProbability: (state) => state.rainProbability
  }
};
