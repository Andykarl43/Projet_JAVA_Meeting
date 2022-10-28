//reservations.model.ts
import {Members} from "./members.model";

export class Reservations {
  id: bigint | null;
  nom: string;
  id_salle: bigint;
  id_membre: bigint;
  membreList: Array<Members> = [];
  date_reserv: Date;


  constructor(id: bigint | null, nom: string, id_salle: bigint, id_membre: bigint, membreList: Array<Members>, date_reserv: Date) {
    this.id = id;
    this.nom = nom;
    this.id_salle = id_salle;
    this.id_membre = id_membre;
    this.membreList = membreList;
    this.date_reserv = date_reserv;
  }
}
