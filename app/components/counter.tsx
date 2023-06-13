import { useState } from "react"

const Counter= () => {
    const [ count, setcount] = useState(0)

const incrementCounter = () => {
    setcount (count + 1)
};

const decrementCounter = () => {
    setcount (count - 1)
};

const resetCounter = () => {
    setcount (0)
}

    return(
        <div>
            <h1 className="componentHeading">Counter</h1>
            <p className={count>10?"greater-than-10":"smaller-than-10"}>Count: {count}</p>
            <button className="fancyButton" onClick={() => incrementCounter()}>increment</button>
            <button className="fancyButton" onClick={() => decrementCounter()}>Decrement</button>
            <button className="fancyButton" onClick={() => resetCounter()}>Reset</button>
        </div>
    )
}

export default Counter;