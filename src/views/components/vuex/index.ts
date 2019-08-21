import { Module } from 'vuex'
import { DEFAULTANSWERS } from './constants'
import { actions } from './actions'
import { getters } from './getters'
import { CommonState } from './types'

const state: CommonState = {
  answers: DEFAULTANSWERS
}

export default {
  state,
  actions,
  getters,
  namespaced: true
}
