import React from 'react'

// const NavItem = ({text, strings}) => {
//     return <li className="header__nav-item" >
//         <a href="/">{ strings[text] }</a>
//      </li>
// }

const Nav = ({menu, strings}) => {
    let values = Object.values(menu)
    console.log(values)

    return  (
        <ul className="header__nav">
            <li className="header__nav-item" key="1"><a href="/" className="header__nav-link">Home</a></li>
            <li className="header__nav-item" key="2"><a href="/" className="header__nav-link">About</a></li>
            <li className="header__nav-item" key="3"><a href="/" className="header__nav-link">Portfolio</a></li>
            <li className="header__nav-item" key="4"><a href="/" className="header__nav-link">Education</a></li>
            <li className="header__nav-item" key="5"><a href="/" className="header__nav-link">Experience</a></li>
            <li className="header__nav-item" key="6"><a href="/" className="header__nav-link">About</a></li>
            {/* {   
                values.map(item => 
                    <NavItem key={item.order} text={item.menu_text_string} strings={strings} />
                )
            } */}
        </ul>
    )
}

export default Nav