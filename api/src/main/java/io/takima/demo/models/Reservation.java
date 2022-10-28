package io.takima.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table( name="reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nom")
    private String nom;
    @Column(name = "id_salle")
    private Long id_salle;
    @Column(name = "date_reserv")
    private Date date_reserv;
    @Column(name = "id_membre")
    private Long id_membre;

//    @ManyToOne
//    @JoinColumn(name = "id_membre", nullable = false)
//    @JsonIgnore
//    private Membre membre;

//    @OneToMany(mappedBy = "reservation")
//    private List<Membre> membreList;



    public Reservation() {
    }

    public Reservation(Long id, String nom, Long id_salle, Date date_reserv, Long id_membre) {
        this.id = id;
        this.nom = nom;
        this.id_salle = id_salle;
        this.date_reserv = date_reserv;
        this.id_membre = id_membre;
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

    public Long getId_salle() {
        return id_salle;
    }

    public void setId_salle(Long id_salle) {
        this.id_salle = id_salle;
    }

    public Date getDate_reserv() {
        return date_reserv;
    }

    public void setDate_reserv(Date date_reserv) {
        this.date_reserv = date_reserv;
    }



    public Long getId_membre() {
        return id_membre;
    }

    public void setId_membre(Long id_membre) {
        this.id_membre = id_membre;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nom, id_salle, date_reserv, id_membre);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reservation reservation = (Reservation) o;
        return Objects.equals(id, reservation.id) && Objects.equals(nom, reservation.nom) && Objects.equals(id_salle, reservation.id_salle) && Objects.equals(date_reserv, reservation.date_reserv) && Objects.equals(id_membre, reservation.id_membre) ;
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", id_salle=" + id_salle +
                ", date_reserv=" + date_reserv +
                ", id_membre=" + id_membre +
                '}';
    }
}
