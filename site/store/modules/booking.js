const state = {
  currentComponent: '',
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
    pay: false,
    upload: null,
    previousImage: '',
  },
  payment: false
}

const getters = {
  store: state => state,
  currentComponent: state => state.currentComponent,
  bookingFor: state => state.bookingFor,
  ontarioRes: state => state.ontarioRes,
  bodyParts: state => state.bodyParts,
  waiver: state => state.waiver,
  referral: state => state.referral,
  payment: state => state.payment,
  totalPrice: state => {
    var price = 0
    if(state.referral.pay == true) {
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
  updateComponent(state, payload) {
    state.currentComponent = payload
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
  updateReferralPay(state, payload) {
    state.referral.pay = payload.pay
    state.referral.upload = payload.upload
  },
  updatePayment(state, payload) {
    state.payment = payload
  }
}

const actions = {
  updateComponent({ commit }, payload) {
    commit('updateComponent', payload)
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
  updateReferralPay({ commit }, payload) {
    commit('updateReferralPay', payload)
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
  },
  resetBooking({ commit }, payload) {
    commit('updateBooking', '')
    commit('updateResident', '')
    commit('updateBodyParts', { brain: [], spine: [], body: [], extremities: [] })
    commit('updateWaiver', { party: [], otherParty: { selected: false, text: '' }, agree: false, firstName: '', lastName: '', date: '' })
    commit('updateReferral', { pay: false, upload: null })
    commit('updatePayment', false)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
