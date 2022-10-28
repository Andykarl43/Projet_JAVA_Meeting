package io.takima.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Objects;


@Entity
@Table(name = "membres")
public class Membre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nom")
    private String nom;
    @Column(name = "email")
    private String email;
    @Column(name = "birthday")
    private Date birthday;

//    @ManyToOne
//    @JoinColumn(name = "id_reservation", nullable = false)
//    @JsonIgnore
//    private Reservation reservation;

//    @OneToMany(mappedBy = "membre")
//    private List<Reservation> reservationsList;

    @OneToMany(mappedBy = "membre")
    private List<Events> eventsList;



    public List<Events> getEventsList() {
        return eventsList;
    }

    public void setEventsList(List<Events> eventsList) {
        this.eventsList = eventsList;
    }



    public Membre() {
    }

    public Membre(Long id, String nom, String email, Date birthday) {
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.birthday = birthday;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Membre membre = (Membre) o;
        return Objects.equals(id, membre.id) && Objects.equals(nom, membre.nom) && Objects.equals(email, membre.email) && Objects.equals(birthday, membre.birthday);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nom, email, birthday);
    }


    @Override
    public String toString() {
        return "Membre{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", email='" + email + '\'' +
                ", birthday=" + birthday +
                '}';
    }
}
