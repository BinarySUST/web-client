import React from 'react'
import HeaderTop from './HeaderTop'
import Menu from './Menu'

const Header = () => {
    return (
        <header className="rbt-header rbt-header-4">
            <div className="rbt-sticky-placeholder" />
            <HeaderTop />
            <Menu />
        </header>
    )
}

export default Header