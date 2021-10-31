import React, {useState} from 'react';
import './SortOptions.scss';
import filterIcon from '../../assets/svg/rectangle.svg';
import lineIcon from '../../assets/svg/line.svg';
import arrow from '../../assets/svg/arrow.svg';

const sortList = [
    {name: 'По цене', key: 'price', id: '1'},
    {name: 'По популярности', key: 'sold', id: '2'},
    {name: 'По названию', key: 'name', id: '3'},
];

function SortOptions() {
    const [sortDirection, setSortDirection] = useState('');
    const [sortKey, setSortKey] = useState('');

    const handleClick = key => {
        setSortKey(key);
        if (sortDirection === '') {
            setSortDirection('desc');
        } else if (sortDirection === 'desc' && sortKey === key) {
            setSortDirection('asc');
        } else {
            setSortDirection('desc');
        }
    };

    return (
        <div className='wrapper-sort-option'>
            <div className="sort-option">
                <img src={filterIcon} alt="filterIcon" className="sort-option__filter-icon"/>
                {sortList.map(sortItem => {
                    return (
                        <div
                            key={sortItem.id}
                            className={`sort-option__name ${sortItem.key === sortKey ? 'sort-option__name_selected' : ''}`}
                            onClick={() => handleClick(sortItem.key)}
                        >
                            {sortItem.name}
                            {sortDirection !== '' && sortItem.key === sortKey && (
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className={`sort-option__img  ${sortDirection === 'desc' ? 'sort-option__img_reversed' : ''}`}
                                />
                            )}
                            <img src={lineIcon} alt="lineIcon" className="sort-option__line-icon"/>
                        </div>
                    );
                })}
            </div>
            <div className="wrapper-sort-option__quantity-products"> 24 продукта найдено</div>
        </div>
    );
}

export default SortOptions;

