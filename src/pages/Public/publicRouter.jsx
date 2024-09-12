import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Create, Current, PublicLayout } from '@pages/Public/import.js'
import { Error } from '@utils/import.js'

function PublicRouter () {

    return (

        <Routes>

            <Route element={<PublicLayout />} >

                <Route path="/" element={<Home />} />
                <Route path='/create/' element={<Create />} />
                <Route path="/current" element={<Current />} />

            </Route>

            <Route path="*" element={<Error />} />

        </Routes>
        
    )
}

export default PublicRouter