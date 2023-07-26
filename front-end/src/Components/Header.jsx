import React from 'react'
import { DiAptana } from 'react-icons/di';

//import { Link,NavLink } from "react-router-dom";


function Header() {
    return (
        <div>
            <nav className='navbar bg-light mb-4 p-0'>
                <div className='container'>
                    <a className='navbar-brand' href='/'>
                        <div className='d-flex '>
                            <DiAptana className='icon mt-1' style={{fontSize:'30px'}} />

                            <div  style={{fontFamily:'cambria',fontSize:'27px'}}>  Project-Management</div>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header