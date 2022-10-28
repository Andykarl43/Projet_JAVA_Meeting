//salles.model.ts
export class Salles {
  id: bigint | null;
  nom: string;
  url: string;
  equipes: string;
  capacite: bigint;


  constructor(id: bigint | null, nom: string,  capacite: bigint, url: string, equipes: string) {
    this.id = id;
    this.nom = nom;
    this.capacite = capacite;
    this.url = url;
    this.equipes = equipes;

  }
}
