import './Header.scss'
import React from 'react'
import menu from '../../assets/svg/menu.svg'
import basket from '../../assets/svg/basket.svg'


function Header() {
    return (
        <div className='wrapper-header'>
            <div className='wrapper-header__menu'>
                <img src={menu} alt='menu'/>
            </div>
            <div className='wrapper-header__name'>
                GreenStore
            </div>
            <div className='wrapper-header__basket'>
                <img src={basket} alt='basket'/>
            </div>
        </div>
    )
}


export default Header;

