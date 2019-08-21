import { ActionTree } from 'vuex'
import { CommonState } from './types'

export const actions: ActionTree<CommonState, any> = {
    getAnwser({state}): string {
        const ansList = state.answers;
        const answer = ansList[Math.floor(Math.random() * ansList.length)];
        return answer;
      }
}