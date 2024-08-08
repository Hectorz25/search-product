import React from 'react'

export const NavBar = () => {
    const navMenu = [
        'Gatete','GitHub'
    ]
    const logo = 'https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png';
  return (
    <header className='header'>
        <div className="logo">
            <img src={logo} alt="brand Logo" />
        </div>
        <nav>
            <ul className='nav-links'>
                {
                    navMenu.map((option,index) => {
                        return(
                            <li key={index}>
                                <a href='#'>{option}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
  )
}
