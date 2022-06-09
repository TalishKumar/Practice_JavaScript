import {useState} from "react";

const Counter = () =>{

    //init count var & setCount function
    const [count, setCount] = useState(0);


    const increment = () =>
    {
        setCount((prevState) => prevState = prevState + 1) //Use callback function
        console.log(count)
    }

        return (
            <>
                <div>Result: {count}</div>
                <button onClick={increment}>+</button>
            </>
        );

}

export default Counter;