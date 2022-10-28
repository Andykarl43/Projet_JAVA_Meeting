package io.takima.demo.controllers;

import io.takima.demo.ReservationDAO;
import io.takima.demo.models.Reservation;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("reservations")
@RestController
public class ReservationController {
    private final ReservationDAO reservationDAO;

    public ReservationController(ReservationDAO reservationDAO) {
        this.reservationDAO = reservationDAO;
    }

    @GetMapping("")
    public List<Reservation> listReservations() {
        Iterable<Reservation> it = reservationDAO.findAll();
        List <Reservation> reservations = new ArrayList<>();
        it.forEach(reservation -> reservations.add(reservation));
        return reservations ;
    }

    @GetMapping("/{id}")
    public Reservation detailsReservation(@PathVariable Long id){
        Optional<Reservation> reservation = reservationDAO.findById(id);
        return reservation.get();
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        reservationDAO.deleteById(id);
    }

    @PostMapping("")
    public void addreservation(@RequestBody Reservation reservation) {
        reservationDAO.save(reservation);
    }

    @PutMapping("")
    public void updatereservation(@RequestBody Reservation reservation) {
        reservationDAO.save(reservation);
    }

}
