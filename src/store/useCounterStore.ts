import { create } from 'zustand'

interface CounterState {
  count: number
  actions: CounterActions
}

interface CounterActions {
  decreaseCount: () => void
  increaseCount: () => void
  removeAll: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  actions: {
    decreaseCount: () => set((state) => ({count: state.count - 1})),
    increaseCount: () => set((state) => ({count: state.count + 1})),
    removeAll: () => set({count: 0}),
  },
}))
