import React, {useState, useEffect} from 'react'
import './Filters.scss'
import {request} from '../../helpers/request';

function Filters() {
    const [items, setItems] = useState([]);

    const didMount = () => {
        request('categories').then(data => {
            setItems(data.map(item => ({...item, isActive: false})));
        })
    };

    useEffect(didMount, []);

    const handleClick = id => {
        const nextState = items.map(item => {
            return item.id !== id
                ? item
                : {...item, isActive: !item.isActive}
        });
        setItems(nextState);
    }

    return (
        <div className='filters'>
            {items.map(item => (
                <div
                    key={item.id}
                    className={item.isActive ? 'filters__item_selected' : 'filters__item'}
                    onClick={() => handleClick(item.id)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
}

export default Filters