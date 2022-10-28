//members.model.ts
export class Members {
  id: bigint | null;
  nom: string;
  birthday: Date;
  email: string;

  constructor(id: bigint | null, nom: string, birthday: Date, email: string) {
    this.id = id;
    this.nom = nom;
    this.birthday = birthday;
    this.email = email;
  }
}
