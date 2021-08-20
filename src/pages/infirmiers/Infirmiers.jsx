import React, { useEffect, useState } from 'react'
import { InfirmierProvider } from '../../shared/contexts/InfirmierContext'
import { infirmiersService } from './services/InfirmiersService'
import { Routing } from '../../shared/router/Routing'

export const Infirmiers = () => {
    const [infirmiersList, setInfirmiersList] = useState()

    useEffect(() => {
        getAllInfirmiers()
    }, [])

    const getAllInfirmiers = () => {
        infirmiersService.getAllInfirmiers().then(data => setInfirmiersList(data))
    }

    const addInfirmier = (infirmier) => {
        infirmiersService.postInfirmier(infirmier)
    }

    return (
        <InfirmierProvider.Provider value={{infirmiersList, addInfirmier}}>
            <Routing></Routing>
        </InfirmierProvider.Provider>
    )
}
