import configData from '../../../config/config.json'

class InfirmiersService{
    url = configData.SERVER_URL

    requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    getAllInfirmiers = () => {
        return fetch(this.url, this.requestOptions).then(res => res.json())
    }

    // getInfirmierById = (id) => {
    //     return fetch(`${this.url}?id=${id}`, {this.requestOptions).then(res => res.json())
    // }

    postInfirmier = (infirmier) => {
        return fetch(this.url, {
            ...this.requestOptions, 
            method: "POST", 
            body:JSON.stringify(infirmier)
        }).then(res => res.json())
    }
}

export const infirmiersService = Object.freeze(new InfirmiersService())