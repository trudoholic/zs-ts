import { useCounterStore } from '../store/useCounterStore'

function CountDisplay() {
  const count = useCounterStore(s => s.count)

  return (
    <div>
      <h1>Count is {count}</h1>
    </div>
  )
}

export default CountDisplay
