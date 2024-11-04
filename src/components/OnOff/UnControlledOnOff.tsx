import React, {useState} from 'react';

type UnControlledOnOffPropsType = {
    //value: boolean
}

export const UnControlledOnOff = (props: UnControlledOnOffPropsType) => {

    let [value, setValue] = useState(false)


    const styledOn = {
        width: '30px',
        height: '20px',
        backgroundColor: value ? 'green' : 'white',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',

    }
    const styledOff = {
        width: '30px',
        height: '20px',
        backgroundColor: value ? 'white' : 'red',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',

    }
    const indicatorOnOff = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        backgroundColor: value ?'green' : 'red',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px'
    }
    return (<div>
            <div style={styledOn}
                 onClick={()=>setValue(true)}
            >On</div>
            <div style={styledOff} onClick={()=>setValue(false)}>Off</div>
            <div style={indicatorOnOff}></div>
        </div>


    );
};

