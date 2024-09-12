import { Link } from 'react-router-dom'
import './home.scss'

function Home () {

    return (

        <div className="home__Container">

            <Link to='/create/' className='home__Link'>
                <button className="home__Button"> Create Employee </button>
            </Link>
            
            <Link to='/current/' className='home__Link'>
                <button className="home__Button"> Current Employee </button>
            </Link>
            
        </div>
    )
}

export default Home
