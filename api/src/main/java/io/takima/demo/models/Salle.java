package io.takima.demo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table( name="salle")
public class Salle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nom")
    private String nom;
    @Column(name = "capacite")
    private String capacite;
    @Column(name = "url")
    private String url;
    @Column(name = "equipes")
    private String equipes;

    public Salle() {
    }

    public Salle(Long id, String nom, String capacite, String url, String equipes) {
        this.id = id;
        this.nom = nom;
        this.capacite = capacite;
        this.url = url;
        this.equipes = equipes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getCapacite() {
        return capacite;
    }

    public void setCapacite(String capacite) {
        this.capacite = capacite;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getEquipes() {
        return equipes;
    }

    public void setEquipes(String equipes) {
        this.equipes = equipes;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nom, capacite, url, equipes);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Salle salle = (Salle) o;
        return Objects.equals(id, salle.id) && Objects.equals(nom, salle.nom) && Objects.equals(capacite, salle.capacite) && Objects.equals(url, salle.url) && Objects.equals(equipes, salle.equipes);
    }

    @Override
    public String toString() {
        return "Salle{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", capacite='" + capacite + '\'' +
                ", url='" + url + '\'' +
                ", equipes='" + equipes + '\'' +
                '}';
    }
}
