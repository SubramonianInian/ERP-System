import React from 'react'
import NavBar from './navbar/navBar'
import "../layouts/layout.scss";
function withLayout(Component) {
    return (props) => {
        return (
            <>
                <NavBar />
                <div className='main-layout'>
                    <Component  {...props} />
                </div>
            </>
        )
    }
}

export default withLayout