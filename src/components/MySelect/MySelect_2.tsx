import React, {useState} from 'react';
import styles from './MySelect_2.module.css';


export type ItemProps = {
    value: string
    title: string
}

export type MySelectProps = {
    items: Array<ItemProps>
    value: string
    onChange?: (value: string) => void
}

export const MySelect2 = (props: MySelectProps) => {

    const [active1, setActive1] = useState(false)

    const selectedValue = props.items.find(i => i.value === props.value)

    return (
        <>
            <div className={styles.select + ' ' + (active1 ? styles.active : '')}>
                <span onClick={()=>setActive1(!active1)}>{selectedValue && selectedValue.title}</span>
                <div className={styles.items}>
                    {props.items.map(i => {
                        return <div key={i.value}>{i.title}</div>
                    })}
                </div>
            </div>
        </>
    );
};

