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
    },[count]);

    return <div>
        hello, {count}
        <button onClick={() => {setCount(count + 1)}}>+</button>
        hello, {faceCount}
        <button onClick={() => {setFaceCount(faceCount + 1)}}>+</button>
    </div>
};


