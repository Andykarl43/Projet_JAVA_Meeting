//events.model.ts
export class Events {
  id: bigint | null;
  libelle: string;
  id_salle: bigint;
  id_membre: bigint;
  date_debut: Date;
  date_fin: Date;


  constructor(id: bigint | null, libelle: string, id_salle: bigint, id_membre: bigint, date_debut: Date, date_fin: Date) {
    this.id = id;
    this.libelle = libelle;
    this.id_salle = id_salle;
    this.id_membre = id_membre;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
  }
}
