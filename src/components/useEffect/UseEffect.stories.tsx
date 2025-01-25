import React, {useEffect, useState} from "react";


export default {}

//const onChangeHandler = action('onChange')


export const UseEffectDemoStories = () => {
    console.log('UseEffectDemoStories')

    const [count, setCount] = useState(1)
    const [faceCount, setFaceCount] = useState(1)

    useEffect(() => {
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
        const timeoutId = setTimeout(() => {
            console.log('Timeout')
            document.title = count.toString()
        }, 2000)

        return () => {
            clearTimeout(timeoutId)
        }

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
        const intervalId = setInterval(() => {
            console.log(count + 'tick')
            setCount(state => state + 1)
        }, 6000)

        return () => {
            clearInterval(intervalId)
        }

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

export const KeysTrackedExample = () => {

    const [text, setText] = useState('')

    useEffect(() => {
        console.log('useEffect')

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text => text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, []);

    return <div>
        Typed text: {text}
    </div>
};





