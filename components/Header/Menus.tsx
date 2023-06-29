import React from 'react'
import menus from './menus'
import Link from 'next/link'

const Menus = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                {menus.map(menu => (
                    <li key={menu.id} className={menu.submenus ? 'has-dropdown has-menu-child-item' : ''}>
                        <Link href={menu.path}>{menu.name}  {menu.submenus && (<i className="feather-chevron-down"></i>)}</Link>
                        {menu.submenus && (<ul className="submenu">
                            {menu.submenus.map(submenu => (
                                <li key={submenu.id}>
                                    <Link href={submenu.path}>{submenu.name}</Link>
                                </li>
                            ))}
                        </ul>)}

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menus