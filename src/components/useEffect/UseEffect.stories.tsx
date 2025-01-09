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

export const Clock = () => {
    console.log('Clock')

   let [clock, setClock] = useState('')

    useEffect(()=>{

        setInterval(()=>{

            const dateObject = new Date()

            const hour = dateObject.getHours()
            const minute = dateObject.getMinutes().toString().padStart(2, '0')
            const second = dateObject.getSeconds().toString().padStart(2, '0')

            const currentTime = hour + ' : ' + minute + ' : ' + second

            setClock(()=>currentTime)
        }, 1000)

    }, [])

    return <div style={{fontSize:'100px', color: 'darkgray'}}>
        {clock}
    </div>
};




