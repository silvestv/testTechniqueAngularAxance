// Voici un type item réutilisable dans le reste de l'application
// Tout les champs ne seront pas affiché dans toutes les vues
// un item sera initialisé par la lecture d'un JSON se trouvant dans les assets
export class Item {

  constructor(public id: number,
              public name: string,
              public brand: string,
              public price: number,
              public collection: string,
              public imgUrl: string,
              public rate: number,
              public popular: number) {}
}
