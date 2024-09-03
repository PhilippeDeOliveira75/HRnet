import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Product, PublicLayout } from '@pages/Public/import.js'
import { Error } from '@utils/import.js'

function PublicRouter () {

    return (

        <Routes>

            <Route element={<PublicLayout />} >

                <Route path="/" element={<Home />} />
                <Route path='/product/' element={<Product />} />


            </Route>

            <Route path="*" element={<Error />} />

        </Routes>
        
    )
}

export default PublicRouter