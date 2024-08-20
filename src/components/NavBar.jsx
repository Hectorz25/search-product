import React from 'react'
import routes from '../routes/routes';

export const NavBar = () => {
    const navMenu = [
        {'option':'Gatete','url':'#'},
        {'option':'GitHub','url': routes.getGithubProfile}
    ]
  return (
    <header className='header'>
        <div className="logo">
            <img src={routes.getLogoUrl} alt="brand Logo" />
        </div>
        <nav>
            <ul className='nav-links'>
                {
                    navMenu.map((option,index) => {
                        return(
                            <li key={index}>
                                <a href={option.url}>{option.option}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
  )
}
