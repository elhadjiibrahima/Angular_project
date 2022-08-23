export type IProduit = IBurger | IMenu | IVariete | IFrites;
export interface IBurgers {
    burger: IBurger,
    quantite: number
}
export interface IFritess {
    frites: IFrites
    quantite: number
}
export interface IVariete {
    id: number,
    nom: string,
    prix: number,
    photo: string,
    Boissons: IBoisson[],
    Burgers: IBurgers[],
    Frites: IFritess[],
    quantite: number
    qte:number

}
export interface IVarieteTaille {
    boisson: IVariete,
    prix: number,
    quantite: number
}
export interface IBurger {
    id: number,
    nom: string,
    prix: number,
    photo: string,
    Boissons: IBoisson[],
    Burgers: IBurgers[],
    Frites: IFritess[],
    quantite: number
    qte:number

}
export interface ITailleBoisson {
    id: number,
    Libelle: string,
    quantite: number,
    varieteTailles: IVarieteTaille[]
}
export interface IBoisson {
    quantite: number,
    tailleBoisson: ITailleBoisson
}
export interface IFrites {
    id: number,
    nom: string,
    prix: number,
    photo: string,
    Boissons: IBoisson[],
    Burgers: IBurgers[],
    Frites: IFritess[],
    quantite: number
    qte:number

}
export interface IMenu {
    id: number,
    nom: string,
    prix: number,
    photo: string,
    Boissons: IBoisson[],
    Burgers: IBurgers[],
    Frites: IFritess[],
    quantite:number
    qte:number
}
export interface IClient{
    id:number
    nomComplet:string,
    phoneNumber:string
    adresse:string
}
export interface ICommande{
    id:number;
    client:IClient;
    date:Date;
    etat:string;
    numeroCommande:string
    prixTotal:number
    Produits:ILigneDeCommande[]
    zone:IZone
    livraison:ILivraison
}
export interface ILigneDeCommande{
    produit:IProduit;
    boissons:ILdcVar[] 
    quantite:number;
}
export interface ILdcVar{
    varieteTaille:IVarieteTaille;
    quantite:number
}
export interface IZone{
    id:number,
    nom:string,
    prixLivraison:number
    quartier:IQuartier[],
    commandes:ICommande[],
}
export interface IQuartier{
    id:number,
    nom:string,
}
export interface ILivreur{
    id:number
    nomComplet:string
    matriculeMoto:string
    dispo:boolean
    livraison:ILivraison[]
}
export interface ILivraison{
    id:number
    zone:IZone
    commandes:ICommande[]
    livreur:ILivreur
}