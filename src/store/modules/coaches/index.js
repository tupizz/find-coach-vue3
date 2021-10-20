export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: "c1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations: {
    registerCoachMutation(state, payload) {
      state.coaches.push(payload);
    },
  },
  actions: {
    registerCoachAction(context, payload) {
      const coachData = {
        id: context.rootGetters.userId,
        firstName: payload.first,
        lastName: payload.last,
        areas: payload.areas,
        description: payload.desc,
        hourlyRate: payload.rate,
      };

      context.commit("registerCoachMutation", coachData);
    },
  },
  getters: {
    findCoaches(state) {
      return state.coaches;
    },
    isCoach(_state, getters, _rootState, rootGetters) {
      const coaches = getters.findCoaches;
      const userId = rootGetters.userId;
      return coaches.some((coach) => coach.id === userId);
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
  },
};
