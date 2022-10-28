INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (1, 'Paul', 'Harrohide', 20);
INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (2, 'Harry', 'Covert', 25);
INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (3, 'Alain', 'Posteur', null);
INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (4, 'Elvire', 'Debord', null);
INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (5, 'Laurent', 'Barre', 41);
INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (6, 'Homer', 'Cipourtoux', 28);
INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (7, 'Gaston', 'Laplouz', null);
INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (8, 'Gisèle', 'Detable', null);
INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (9, 'Thomas', 'Ouaque', null);
INSERT INTO defaultdb.users (id, first_name, last_name, age) VALUES (10, 'Sacha', 'Telfrize', 23);

INSERT INTO defaultdb.membres (id, nom, email, id_reservation) VALUES (1, 'membre A', 'lien@lien.com',1);
INSERT INTO defaultdb.membres (id, nom, email, id_reservation) VALUES (2, 'membre B', 'lien@liens.com',1);
INSERT INTO defaultdb.salle (id, nom, url, equipes, capacite) VALUES (1, 'salle A', 'lien A', 'television,prise multiple', 21);
INSERT INTO defaultdb.salle (id, nom, url, equipes, capacite) VALUES (2, 'salle B', 'lien B', 'television,prise multiple', 25);
INSERT INTO defaultdb.reservation (id, nom, id_salle, id_membre) VALUES (1, 'reser A', 1, 1);
INSERT INTO defaultdb.reservation (id, nom, id_salle, id_membre) VALUES (2, 'reser B', 2, 2);

INSERT INTO defaultdb.events (id, libelle, id_membre, id_salle) VALUES (1, 'events A',1, 1 );
INSERT INTO defaultdb.events (id, libelle, id_membre, id_salle) VALUES (3, 'events B',1, 2 );