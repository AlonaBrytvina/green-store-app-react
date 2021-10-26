import './Header.scss'
import React from 'react'
import menu from './img/menu.svg'
import basket from './img/basket.svg'


class Header extends React.Component{

    render() {
        return(
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
}


export default Header