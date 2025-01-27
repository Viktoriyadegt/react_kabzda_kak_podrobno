import React from 'react';

type OnOffPropsType = {
    value: boolean
    changeOnOff:(value:boolean)=>void
}

export const OnOff = (props: OnOffPropsType) => {

    const styledOn = {
        width: '30px',
        height: '20px',
        backgroundColor: props.value ? 'green' : 'white',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',

    }
    const styledOff = {
        width: '30px',
        height: '20px',
        backgroundColor: props.value ? 'white' : 'red',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',

    }
    const indicatorOnOff = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        backgroundColor: props.value ?'green' : 'red',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px'
    }

    const changeOnHandler = ()=>props.changeOnOff(true)
    const changeOffHandler = ()=>props.changeOnOff(false)

    return (<div>
            <div style={styledOn} onClick={changeOnHandler}>On</div>
            <div style={styledOff} onClick={changeOffHandler}>Off</div>
            <div style={indicatorOnOff}></div>
        </div>


    );
};

