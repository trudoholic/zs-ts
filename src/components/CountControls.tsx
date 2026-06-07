import { useShallow } from 'zustand/react/shallow'
import { useCounterStore } from '../store/useCounterStore'

function CountControls() {
  const { decreaseCount, increaseCount, removeAll } = useCounterStore(useShallow(s => ({
    decreaseCount: s.decreaseCount,
    increaseCount: s.increaseCount,
    removeAll: s.removeAll,
  })))

  return (
    <div>
      <button
        type="button"
        className="counter"
        onClick={decreaseCount}
      >
        Decrease Count
      </button>
      &nbsp;
      <button
        type="button"
        className="counter"
        onClick={increaseCount}
      >
        Increase Count
      </button>
      &nbsp;
      <button
        type="button"
        className="counter"
        onClick={removeAll}
      >
        Remove All
      </button>

    </div>
  )
}

export default CountControls
