import './header.scss'

import { Link } from 'react-router-dom'

function Header() {


  return (

    <Link to='/' className='header__Link'>

      <header className='header__Container'>

        <h1 className='header__Title'> HR net </h1>

      </header>

    </Link>

  )

}

export default Header