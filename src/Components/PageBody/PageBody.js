import React from 'react'
import './PageBody.scss'
import Filters from "../Filters/Filters";


class PageBody extends React.Component{
    render(){
        return(
            <div className='page-body'>
                <Filters/>
            </div>
        )
    }
}

export default PageBody