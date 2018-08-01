const defaultState = () => {
	return {
		currentComponent: '',
		bookingFor: '',
		ontarioRes: '',
		bodyParts: [
			{
				type: 'brain',
				name: 'Routine Brain',
				id: 'brain_routine',
				price: 850,
				selected: false
			},
			{
				type: 'brain',
				name: 'Facial Bones',
				id: 'brain_facial',
				price: 850,
				selected: false
			},
			{
				type: 'brain',
				name: 'Brain with Susceptibility Weighted Imaging (SWI)',
				id: 'brain_swi',
				price: 850,
				selected: false
			},
			{
				type: 'brain',
				name: 'Temporomandibular Joints (no brain included) - (Jaw)',
				id: 'brain_jaw',
				price: 850,
				selected: false
			},

			{
				type: 'spine',
				name: 'Cervical (neck)',
				id: 'spine_cervical',
				price: 750,
				selected: false
			},
			{
				type: 'spine',
				name: 'Thoracic (midback)',
				id: 'spine_thoracic',
				price: 750,
				selected: false
			},
			{
				type: 'spine',
				name: 'Lumbar (lowerback)',
				id: 'spine_lumbar',
				price: 750,
				selected: false
			},
			{
				type: 'spine',
				name: 'Sacrum',
				id: 'spine_sacrum',
				price: 750,
				selected: false
			},
			{
				type: 'spine',
				name: 'Sacroiliac Joints',
				id: 'spine_sacroiliac',
				price: 750,
				selected: false
			},
			{
				type: 'spine',
				name: 'Coccyx (tailbone)',
				id: 'spine_coccyx',
				price: 750,
				selected: false
			},
			{
				type: 'spine',
				name: 'Lumbar Spine Sacrum Combination',
				id: 'spine_lumbar-sacrum',
				price: 1200,
				selected: false
			},
			{
				type: 'spine',
				name: 'Lumbar Spine Sacroiliac Joints Combination',
				id: 'spine_lumbar-sacroiliac',
				price: 1200,
				selected: false
			},

			{
				type: 'body',
				name: 'Thorax',
				id: 'body_thorax',
				price: 850,
				selected: false
			},
			{
				type: 'body',
				name: 'Abdomen',
				id: 'body_abdomen',
				price: 850,
				selected: false
			},
			{
				type: 'body',
				name: 'Pelvis',
				id: 'body_pelvis',
				price: 850,
				selected: false
			},
			{
				type: 'body',
				name: 'Prostate',
				id: 'body_prostate',
				price: 1000,
				selected: false
			},
			{
				type: 'body',
				name: 'Liver',
				id: 'body_liver',
				price: 850,
				selected: false
			},
			{
				type: 'body',
				name: 'Chest',
				id: 'body_chest',
				price: 850,
				selected: false
			},

			{
				type: 'extremities',
				name: 'Left Shoulder',
				id: 'extrem_l-shoulder',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Right Shoulder',
				id: 'extrem_r-shoulder',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Left Elbow',
				id: 'extrem_l-elbow',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Right Elbow',
				id: 'extrem_r-elbow',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Left Wrist',
				id: 'extrem_l-wrist',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Right Wrist',
				id: 'extrem_r-wrist',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Left Hip',
				id: 'extrem_l-hip',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Right Hip',
				id: 'extrem_r-hip',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Left Knee',
				id: 'extrem_l-knee',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Right Knee',
				id: 'extrem_r-knee',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Left Ankle',
				id: 'extrem_l-ankle',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Right Ankle',
				id: 'extrem_r-ankle',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Left Foot',
				id: 'extrem_l-foot',
				price: 750,
				selected: false
			},
			{
				type: 'extremities',
				name: 'Right Foot',
				id: 'extrem_r-foot',
				price: 750,
				selected: false
			}
		],
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
			previousImage: ''
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
	selectedParts: state => state.bodyParts.filter(part => part.selected == true),
	totalPrice: (state, getters) => {
		var price = 0
		if (state.referral.pay == true) {
			price += 100
		}
		getters.selectedParts.forEach(part => {
			price += part.price
		})
		return price
	},
	discount: (state, getters) => {
		var discounts = [
			{ swi: true, spine: 1, body: 0, extremities: 0, discount: 250 },
			{ swi: true, spine: 2, body: 0, extremities: 0, discount: 750 },
			{ swi: true, spine: 1, body: 1, extremities: 0, discount: 500 },
			{ swi: false, spine: 2, body: 0, extremities: 0, discount: 400 },
			{ swi: false, spine: 3, body: 0, extremities: 0, discount: 1000 },
			{ swi: false, spine: 1, body: 0, extremities: 1, discount: 150 },
			{ swi: false, spine: 1, body: 0, extremities: 2, discount: 600 },
			{ swi: false, spine: 2, body: 1, extremities: 0, discount: 600 },
			{ swi: false, spine: 2, body: 0, extremities: 1, discount: 600 },
			{ swi: false, spine: 2, body: 0, extremities: 2, discount: 1100 },
			{ swi: false, spine: 2, body: 2, extremities: 0, discount: 900 }
		]
		var totalDiscount = 0
		const { selectedParts: parts } = getters

		const swi = !!parts.find(part => part.id == 'brain_swi')
		const spine = parts.filter(part => part.type == 'spine').length
		const body = parts.filter(part => part.type == 'body').length
		const extremities = parts.filter(part => part.type == 'extremities').length

		var sorted = discounts.sort((a, b) => {
			const first = a.discount
			const second = b.discount
			let compare = 0
			if (first > second) {
				compare = 1
			} else if (first > second) {
				compare = -1
			}
			return compare
		})

		sorted.forEach(discount => {
			if (
				swi >= discount.swi &&
				spine >= discount.spine &&
				body >= discount.body &&
				extremities >= discount.extremities
			) {
				totalDiscount = discount.discount
			}
		})

		return totalDiscount
	},
	finalPrice: (state, getters) => {
		return getters.totalPrice - getters.discount
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
	actions
}
