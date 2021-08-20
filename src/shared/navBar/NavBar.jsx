import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = (props) => {

    return (
        <nav style={styles.nav}>
            {
                props.pages && props.pages.map(
                    (page, index) => 
                        <NavLink
                            key={index}
                            style={styles.link}
                            activeStyle={styles.active}
                            to={page.href}>
                                {page.name}
                        </NavLink>
                ) 
            }
        </nav>
    )
}

const styles = {
    nav:{
        backgroundColor: "#0371b9",
        color:"whitesmoke",
        height:"2.2em"
    },
    link:{
        color:"whitesmoke",
        backgroundColor: "#0371b9",
        padding:"0.75em",
        margin:"0.25em",
        padding: "100"
    },
    active:{
        color:"whitesmoke",
        backgroundColor: "#254881"
    }
}