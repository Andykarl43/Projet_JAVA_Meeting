package io.takima.demo.controllers;

import io.takima.demo.SalleDAO;
import io.takima.demo.models.Membre;
import io.takima.demo.models.Reservation;
import io.takima.demo.models.Salle;
import io.takima.demo.models.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("salles")
@RestController
public class SalleController {

    private final SalleDAO salleDAO;

    public SalleController(SalleDAO salleDAO) {
        this.salleDAO = salleDAO;
    }

    @GetMapping("")
    public List<Salle> listSalles() {
        Iterable<Salle> it = salleDAO.findAll();
        List <Salle> salles = new ArrayList<>();
        it.forEach(salle -> salles.add(salle));
        return salles ;
    }

    @GetMapping("/{id}")
    public Salle detailsSalles(@PathVariable Long id){
        Optional<Salle> salle = salleDAO.findById(id);
        return salle.get();
    }

    @DeleteMapping("/{id}")
    public void deleteSalles(@PathVariable Long id) {
        salleDAO.deleteById(id);
    }

    @PostMapping("")
    public void addSalles(@RequestBody Salle salle) {

        salleDAO.save(salle);
    }

    @PutMapping("")
    public void updateSalles(@RequestBody Salle salle) {
        salleDAO.save(salle);
    }


}
