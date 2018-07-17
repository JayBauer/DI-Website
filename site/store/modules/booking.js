const defaultState = () => {
  return {
    currentComponent: '',
    bookingFor: '',
    ontarioRes: '',
    bodyParts: {
      brain: [
        { name: 'Routine Brain', id: 'brain_routine', price: 850, selected: false },
        { name: 'Facial Bones', id: 'brain_facial', price: 850, selected: false },
        { name: 'Brain with Susceptibility Weighted Imaging (SWI)', id: 'brain_swi', price: 850, selected: false },
        { name: 'Temporomandibular Joints (no brain included) - (Jaw)', id: 'brain_jaw', price: 850, selected: false },
      ],
      spine: [
        { name: 'Cervical (neck)', id: 'spine_cervical', price: 750, selected: false },
        { name: 'Thoracic (midback)', id: 'spine_thoracic', price: 750, selected: false },
        { name: 'Lumbar (lowerback)', id: 'spine_lumbar', price: 750, selected: false },
        { name: 'Sacrum', id: 'spine_sacrum', price: 750, selected: false },
        { name: 'Sacroiliac Joints', id: 'spine_sacroiliac', price: 750, selected: false },
        { name: 'Coccyx (tailbone)', id: 'spine_coccyx', price: 750, selected: false },
        { name: 'Lumbar Spine Sacrum Combination', id: 'spine_lumbar-sacrum', price: 1200, selected: false },
        { name: 'Lumbar Spine Sacroiliac Joints Combination', id: 'spine_lumbar-sacroiliac', price: 1200, selected: false }
      ],
      body: [
        { name: 'Thorax', id: 'body_thorax', price: 850, selected: false },
        { name: 'Abdomen', id: 'body_abdomen', price: 850, selected: false },
        { name: 'Pelvis', id: 'body_pelvis', price: 850, selected: false },
        { name: 'Prostate', id: 'body_prostate', price: 1000, selected: false },
        { name: 'Liver', id: 'body_liver', price: 850, selected: false },
        { name: 'Chest', id: 'body_chest', price: 850, selected: false },
      ],
      extremities: [
        { name: 'Left Shoulder', id: 'extrem_l-shoulder', price: 750, selected: false },
        { name: 'Right Shoulder', id: 'extrem_r-shoulder', price: 750, selected: false },
        { name: 'Left Elbow', id: 'extrem_l-elbow', price: 750, selected: false },
        { name: 'Right Elbow', id: 'extrem_r-elbow', price: 750, selected: false },
        { name: 'Left Wrist', id: 'extrem_l-wrist', price: 750, selected: false },
        { name: 'Right Wrist', id: 'extrem_r-wrist', price: 750, selected: false },
        { name: 'Left Hip', id: 'extrem_l-hip', price: 750, selected: false },
        { name: 'Right Hip', id: 'extrem_r-hip', price: 750, selected: false },
        { name: 'Left Knee', id: 'extrem_l-knee', price: 750, selected: false },
        { name: 'Right Knee', id: 'extrem_r-knee', price: 750, selected: false },
        { name: 'Left Ankle', id: 'extrem_l-ankle', price: 750, selected: false },
        { name: 'Right Ankle', id: 'extrem_r-ankle', price: 750, selected: false },
        { name: 'Left Foot', id: 'extrem_l-foot', price: 750, selected: false },
        { name: 'Right Foot', id: 'extrem_r-foot', price: 750, selected: false }
      ]
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
}

const state = defaultState()

const getters = {
  store: state => state,
  currentComponent: state => state.currentComponent,
  bookingFor: state => state.bookingFor,
  ontarioRes: state => state.ontarioRes,
  bodyParts: state => state.bodyParts,
  waiver: state => state.waiver,
  referral: state => state.referral,
  payment: state => state.payment,
  selectedParts: state => {
    var parts = []
    if(state.bodyParts) {
      [state.bodyParts.brain, state.bodyParts.spine, state.bodyParts.body, state.bodyParts.extremities].forEach(partList => {
        partList.forEach(part => {
          if(part.selected) {
            parts.push(part)
          }
        })
      })
    }
    return parts
  },
  totalPrice: (state, getters) => {
    var price = 0
    if(state.referral.pay == true) {
      price += 100
    }
    getters.selectedParts.forEach(part => {
      price += part.price
    })
    return price
  },
  discount: (state, getters) => {
    var discount = 0
    var swi = false
    getters.selectedParts.forEach(part => {
      if(part.id == 'brain_swi') {
        swi = true
        discount += 400
      }
    })
    return discount
  }
}

const mutations = {
  resetBooking(state) {
    Object.assign(state, defaultState())
  },
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
  resetBooking({ commit }) {
    commit('resetBooking')
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
