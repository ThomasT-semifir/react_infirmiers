export class Infirmier{
    id;
    nom;
    prenom;
    numeroProfessionnel;
    telPro;
    telPerso;
    adresse;

    constructor(nom,prenom,numeroProfessionnel,telPro,telPerso,adresse){
        this.nom = nom
        this.prenom = prenom
        this.numeroProfessionnel = numeroProfessionnel
        this.telPro = telPro
        this.telPerso = telPerso
        this.adresse = adresse
    }
}
