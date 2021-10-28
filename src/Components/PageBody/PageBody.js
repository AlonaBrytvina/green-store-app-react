import React from 'react'
import './PageBody.scss'
import Filters from "../Filters/Filters";


function PageBody(props) {
    return (
        <div className='page-body'>
            {props.children}
        </div>
    )
}

export default PageBody;

