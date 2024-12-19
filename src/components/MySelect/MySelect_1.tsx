import React, {useEffect, useState, KeyboardEvent} from 'react';
import styles from './MySelect_1.module.css';


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

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const clickedItem = (value: string) => {
        props.onChange(value)
        toggleItems()
    }
    const toggleItems = () => setActive(!active)

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (hoveredElementValue === props.items[i].value) {
                    const pretenderElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretenderElement) {
                        props.onChange(pretenderElement.value)
                        return
                    }
                }
            }
            if (!selectedValue) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select} onKeyDown={onKeyDownHandler} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedValue && selectedValue.title}</span>
                {active && <div className={styles.items}>
                    {props.items.map(i => {
                        return <div className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                    onMouseEnter={() => setHoveredElementValue(i.value)}
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

