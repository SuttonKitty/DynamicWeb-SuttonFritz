import {useState} from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

export default function CounterPage({initialCount}) {
const [count, setCount] = useState(initialCount)

const increment = () => {
setCount(count + 1)
}

const decrement = () => {
setCount(count - 1)
}

return (
<Card className="m-4">

<h1 className="text-xl mb-4">Count is currently: {count}</h1>
<div className="flex flex-row">
<Button success outline rounded onClick={increment}>
Increment
</Button>
<Button danger outline rounded onClick={decrement}>
Decrement
</Button>
</div>
</Card>
)
}
