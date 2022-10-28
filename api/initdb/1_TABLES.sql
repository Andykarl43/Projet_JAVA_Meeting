DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `equipement`;
DROP TABLE IF EXISTS `membres`;
DROP TABLE IF EXISTS `reservation`;

create table users
(
    id bigint auto_increment,
    constraint users_pk
        primary key (id),
    first_name TEXT not null,
    last_name TEXT not null,
    age int null
);

DROP TABLE IF EXISTS `salle`;
create table salle
(
    id bigint auto_increment,
    constraint salle_pk
        primary key (id),
    nom TEXT not null,
    url TEXT not null,
    equipes TEXT not null,
    capacite integer null
);

create table equipement
(
    id bigint auto_increment,
    constraint equipement_pk
        primary key (id),
    nom TEXT not null,
    id_salle bigint null,
    constraint equipement_fk
        foreign key (id_salle) references salle(id)
);

DROP TABLE IF EXISTS `membres`;
create table membres
(
    id bigint auto_increment,
    constraint membres_pk
        primary key (id),
    nom TEXT not null,
    email TEXT not null,
    birthday Date null,
    id_reservation bigint null,
    id_events bigint null
);

create table reservation
(
    id bigint auto_increment,
    constraint reservation_pk
        primary key (id),
    nom TEXT not null,
    id_salle bigint null,
    date_reserv Date null,
    id_membre bigint null,
    constraint reservation_salle_fk
        foreign key (id_salle) references salle(id),
    constraint reservation_m_fk
        foreign key (id_membre) references membres(id)
);


DROP TABLE IF EXISTS `events`;
create table events
(
    id bigint auto_increment,
    constraint events_pk
        primary key (id),
    libelle TEXT not null,
    id_membre bigint not null,
    id_salle bigint null,
    date_debut Date null,
    date_fin Date null,
    constraint events_fk
        foreign key (id_salle) references salle (id),
    constraint events_m_fk
        foreign key (id_membre) references membres(id)
);