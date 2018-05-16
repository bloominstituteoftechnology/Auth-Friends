import React from 'react'
import Nav from './Nav';



const NavWrapper = (props) => (
    <div>
        <div className="Nav-header">
            {props.menuData.map((menu, index) => <Nav key={index} path={`${props.match.path}${menu.name}`} name={menu.name} src={menu.src}/>)
            }
        </div>
    </div>
)
export default NavWrapper