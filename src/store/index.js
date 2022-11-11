import {createStore, createLogger} from "vuex";

export default createStore({
  plugins: [createLogger()],

  state: {
    date: null,
    designation: "",
    amount: "",
    distance: "",
    requests: [],
    requestDB: {},
  },
  mutations: {
    // комментарии: создание объекта из данных модального окна
    createRequest(state) {
      state.requestDB = {
        date: new Date(date.value).setHours(23, 59, 59, 999),
        designation: designation.value,
        amount: amount.value,
        distance: distance.value,
      };
      state.requests.push(state.requestDB);
    },
  },
  actions: {
    // комментарии: загрузка данных в BD
    async submitRequestDB(context) {
      await fetch(
        "https://welbex-test-40cd7-default-rtdb.firebaseio.com//requests.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(context.state.requestDB),
        }
      );
    },
    // комментарии: загрузка данных из BD при перезагрузке страниц
    async loadDataDB(context) {
      const result = await fetch(
        "https://welbex-test-40cd7-default-rtdb.firebaseio.com//requests.json"
      );
      const db = await result.json();
      // комментарии: пересборка массива данных для vuex
      context.state.requests = Object.keys(db).map((id) => ({...db[id], id}));
    },
  },
  modules: {},
  getters: {
    requests(state) {
      return state.requests;
    },
  },
});
