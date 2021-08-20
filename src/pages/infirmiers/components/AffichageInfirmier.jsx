import React from 'react'
import { useHistory } from 'react-router'
import {Card} from 'primereact/card'
import { Button } from 'primereact/button'

export const AffichageInfirmier = ({infirmier}) => {

    const history = useHistory()

    const handleClick = () => {
        history.push(`/detail/${infirmier.id}`)
    }

    const footer = <span>
        <Button onClick={handleClick} label={"Details"} icon="pi pi-search" className="p-button-rounded p-button-success" />
    </span>;

    return (
        <>
            <Card style={styles.card} footer={footer}>
                <div style={styles.container}>
                    <div style={styles.infos}>
                        <p>{infirmier.nom} {infirmier.prenom}</p>
                        <p>N° {infirmier.numeroProfessionnel}</p>
                    </div>
                    <div>
                        <img alt="Card" src={process.env.PUBLIC_URL + '/pngegg.png'} />
                    </div>
                </div>
            </Card>
        </>
    )
}

const styles = {
    // header:{
    //     width:120
    // },
    card:{
        width: "33em",
        marginTop: "5em"
    },
    infos:{

    },
    image: {

    },
    container:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"
    }
}