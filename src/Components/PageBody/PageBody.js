import React from 'react'
import './PageBody.scss'


function PageBody(props) {
    return (
        <div className='page-body'>
            {props.children}
        </div>
    )
}

export default PageBody;



