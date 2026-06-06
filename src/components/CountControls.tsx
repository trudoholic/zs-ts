import { useCounterStore } from '../store/useCounterStore'

function CountControls() {
  const { decreaseCount, increaseCount, removeAll } = useCounterStore()

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
