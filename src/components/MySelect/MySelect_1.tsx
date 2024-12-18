import React, {useState} from 'react';
import styles from './MySelect_1.module.css';

const items = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Gomel'},
    {value: '3', title: 'Grodno'},
    {value: '4', title: 'Vitebsk'},
]

export type ItemProps = {
    value: string
    title: string
}

export type MySelectProps1 = {
    items: Array<ItemProps>
    value: string
    onChange: (value: string) => void
}

export const MySelect_1 = (props: MySelectProps1) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedValue = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const clickedItem = (value: string) => {
        props.onChange(value)
        toggleItems()
    }
    const toggleItems = () => setActive(!active)
    return (
        <>
            <div className={styles.select}>
                <span className={styles.main} onClick={toggleItems}>{selectedValue && selectedValue.title}</span>
                {active && <div className={styles.items}>
                    {props.items.map(i => {
                        return <div className={styles.item + ' ' + (hoveredItem===i ? styles.selected : '')}
                                    onMouseEnter={()=>setHoveredElementValue(i.value)}
                                    key={i.value}
                                    onClick={() => clickedItem(i.value)}>
                            {i.title}
                        </div>
                    })}
                </div>
                }
            </div>
        </>
    );
};

