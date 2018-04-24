const state = {
  user: {
    id: null,
    isAuth: false,
    firstName: ''
  },
  bookingFor: '',
  ontarioRes: '',
  bodyParts: {
    brain: [],
    spine: [],
    body: [],
    extremities: []
  },
  waiver: {
    party: [],
    otherParty: { selected: false, text: '' },
    agree: false,
    firstName: '',
    lastName: '',
    date: ''
  },
  referral: {
    maple: false,
    upload: ''
  },
  payment: false
}

const getters = {
  state: state => state,
  userId: state => state.user.id,
  userName: state => state.user.firstName,
  bookingFor: state => state.bookingFor,
  ontarioRes: state => state.ontarioRes,
  bodyParts: state => state.bodyParts,
  waiver: state => state.waiver,
  referral: state => state.referral,
  payment: state => state.payment,
  totalPrice: state => {
    var price = 0
    if(state.referral.maple == true) {
      price += 100
    }
    for(let i of [state.bodyParts.brain, state.bodyParts.spine, state.bodyParts.body, state.bodyParts.extremities]) {
      for(let j of i) {
        price += j.price
      }
    }
    return price
  }
}

const mutations = {
  updateId(state, payload) {
    state.user.id = payload
  },
  updateName(state, payload) {
    state.user.firstName = payload
  },
  updateAuth(state, payload) {
    state.user.isAuth = payload
  },
  updateBooking(state, payload) {
    state.bookingFor = payload
  },
  updateResident(state, payload) {
    state.ontarioRes = payload
  },
  updateBodyParts(state, payload) {
    state.bodyParts = payload
  },
  updateWaiver(state, payload) {
    state.waiver = payload
  },
  updateReferral(state, payload) {
    state.referral = payload
  },
  updatePayment(state, payload) {
    state.payment = payload
  }
}

const actions = {
  // nuxtServerInit({ commit }, payload) {
  //
  // },
  updateId({ commit }, payload) {
    commit('updateId', payload)
  },
  updateAuth({ commit }, payload) {
    commit('updateAuth', payload)
  },
  updateName({ commit }, payload) {
    commit('updateName', payload)
  },
  updateBooking({ commit }, payload) {
    commit('updateBooking', payload)
  },
  updateResident({ commit }, payload) {
    commit('updateResident', payload)
  },
  updateBodyParts({ commit }, payload) {
    commit('updateBodyParts', payload)
  },
  updateWaiver({ commit }, payload) {
    commit('updateWaiver', payload)
  },
  updateReferral({ commit }, payload) {
    commit('updateReferral', payload)
  },
  updatePayment({ commit }, payload) {
    commit('updatePayment', payload)
  },
  setStore({ commit }, payload) {
    commit('updateBooking', payload.bookingFor)
    commit('updateResident', payload.ontarioRes)
    commit('updateBodyParts', payload.bodyParts)
    commit('updateWaiver', payload.waiver)
    commit('updateReferral', payload.referral)
    commit('updatePayment', payload.payment)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
