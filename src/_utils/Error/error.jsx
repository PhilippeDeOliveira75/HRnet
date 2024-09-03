import React from 'react'
import { Link } from 'react-router-dom'
import './error.scss'

function Error () {

    return (

		<div className='row-404'>
            <span className='title-404'>404</span>
            <p className='text-404'>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='backhome-btn'>Retourner sur la page d’accueil</Link>
		</div>

    )
}

export default Error