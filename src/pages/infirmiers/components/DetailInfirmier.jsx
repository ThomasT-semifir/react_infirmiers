import React, {useContext, useEffect, useState} from 'react'
import { InfirmierProvider } from '../../../shared/contexts/InfirmierContext'
import { useHistory } from 'react-router'
import {Button} from 'primereact/button'

export const DetailInfirmier = (props) => {
    const {infirmiersList} = useContext(InfirmierProvider)
    const [infirmier, setInfirmier] = useState()

    const history = useHistory()

    useEffect(() => {
        setInfirmier(infirmiersList.find(inf => inf.id === +props.id))
    },[infirmiersList, props.id])

    const handleBackToList = () => {
        history.goBack()
    }

    return (
        <>
            {infirmier &&
            <div style={styles.container}>
                <div>
                    <p>Nom: {infirmier.nom}</p>
                    <p>Prenom: {infirmier.prenom}</p>
                    <p>Numero Professionnel: {infirmier.numeroProfessionnel}</p>
                    <p>Téléphone personnel: {infirmier.telPerso}</p>
                    <p>Téléphone professionnel: {infirmier.telPro}</p>
                    <p>Adresse: {`${infirmier.adresse.numeroRue} ${infirmier.adresse.rue} ${infirmier.adresse.codePostal} ${infirmier.adresse.ville}`}</p>
                    <Button onClick={handleBackToList}>Retour à la liste</Button>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/pngegg.png"} />
                </div>
            </div>
            }
        </>
    )
}

const styles = {
    container:{
        display: "flex",
        flexDirection:"row",
        marginTop:"50px", 
        marginLeft:"50px"
    }
}