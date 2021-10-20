import React, { useState } from 'react';
import './ItemCount.css'

export const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1);

    const onAdd = () => {
        if (count < stock) {
           setCount(count + 1)
        }
    };

    const onSubtract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    return (
        <div className="Counter">
            <button onClick={onSubtract}>+</button>
            <p>{count}</p>
            <button onClick={onAdd}>-</button>
        </div>
    )
}