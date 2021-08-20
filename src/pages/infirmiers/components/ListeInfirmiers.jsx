import React from 'react'
import { InfirmierProvider } from '../../../shared/contexts/InfirmierContext'
import { AffichageInfirmier } from './AffichageInfirmier'

export const ListeInfirmiers = (props) => {
    const {infirmiersList} = React.useContext(InfirmierProvider)

    return (
        <div style={styles.container}>
            {infirmiersList && infirmiersList.map((infirmier,i) => {
                    return <AffichageInfirmier key={i} infirmier={infirmier} />
            })}
        </div>
    )
}

const styles = {
    container:{
        display: 'flex',
        flexDirection:'row', 
        flexWrap: "wrap",
        width:'80%', 
        justifyContent: 'space-around',
        margin: "auto"
    }
}