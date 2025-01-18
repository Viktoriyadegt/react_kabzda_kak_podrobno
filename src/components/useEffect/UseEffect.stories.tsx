import React, {useEffect, useState} from "react";

export default {}

//const onChangeHandler = action('onChange')


export const UseEffectDemoStories = () => {
    console.log('UseEffectDemoStories')

    const [count, setCount] = useState(1)
    const [faceCount, setFaceCount] = useState(1)

    useEffect(() => {
        //debugger
        console.log('useEffect')
        document.title = count.toString()
    }, [count]);

    return <div>
        hello, {count}
        <button onClick={() => {
            setCount(count + 1)
        }}>+
        </button>
        hello, {faceCount}
        <button onClick={() => {
            setFaceCount(faceCount + 1)
        }}>+
        </button>
    </div>
};

export const ExampleSetTimeout = () => {
    console.log('ExampleSetTimeout')

    const [count, setCount] = useState(1)
    const [faceCount, setFaceCount] = useState(1)

    useEffect(() => {
        console.log('useEffect')
        setTimeout(() => {
            console.log('Timeout')
            document.title = count.toString()
        }, 2000)

    }, [count]);

    return <div>
        count: {count}
        <button onClick={() => {
            setCount(count + 1)
        }}>+
        </button>
        faceCount: {faceCount}
        <button onClick={() => {
            setFaceCount(faceCount + 1)
        }}>+
        </button>
    </div>
};

export const ExampleSetInterval = () => {
    console.log('ExampleSetInterval')

    const [count, setCount] = useState(1)
    const [faceCount, setFaceCount] = useState(1)

    useEffect(() => {
        console.log('useEffect')
        setInterval(() => {
            console.log(count + 'tick')
            setCount(state => state + 1)
        }, 6000)

    }, []);

    return <div>
        count: {count}
        <button onClick={() => {
            setCount(count + 1)
        }}>+
        </button>
        faceCount: {faceCount}
        <button onClick={() => {
            setFaceCount(faceCount + 1)
        }}>+
        </button>
    </div>
};





