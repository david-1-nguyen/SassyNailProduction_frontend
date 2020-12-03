import React, { useState } from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";

function MenuBar() {

    const [activeItem, setActiveItem] = useState('')

    const handleItemClick = (e, {name}) => setActiveItem(name)

    return (

        <Menu>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
                as={Link}
                to='/'
            />
            <Menu.Item
                name='services'
                active={activeItem === 'services'}
                onClick={handleItemClick}
                as={Link}
                to='/services'
            />
            <Menu.Item
                name='bookings'
                active={activeItem === 'bookings'}
                onClick={handleItemClick}
                as={Link}
                to='/bookings'
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/login'
                />
                <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={handleItemClick}
                    as={Link}
                    to='/register'
                />
            </Menu.Menu>
        </Menu>
    )
}

export default MenuBar
