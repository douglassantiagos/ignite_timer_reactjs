import { produce } from 'immer';
import { ActionTypes } from "./actions";

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CycleState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

export function cyclesReducer(state: CycleState, action: any) { 
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }

      // Código de cima adaptado com o produce do IMMEER
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    }
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, interruptedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }

      // O mesmo código de cima adaptado com o produce do IMMER
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      // se o currentCycleIndex não satisfazer a condição, então (-1)
      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, finishedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null
      // }

      // O mesmo código de cima adaptado com o produce do IMMER
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      // se o currentCycleIndex não satisfazer a condição, então (-1)
      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    case ActionTypes.DELETE_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === action.payload.cycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles.splice(currentCycleIndex, 1)
      })
    }
    default:
      return state;
  }      
}