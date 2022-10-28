package io.takima.demo.controllers;

import io.takima.demo.MembreDAO;
import io.takima.demo.models.Membre;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("members")
@RestController
public class MembreController {

    private final MembreDAO membreDAO;

    public MembreController(MembreDAO membreDAO) {
        this.membreDAO = membreDAO;
    }

    @GetMapping("")
    public List<Membre> listMembres() {
        Iterable<Membre> it = membreDAO.findAll();
        List <Membre> membres = new ArrayList<>();
        it.forEach(membre -> membres.add(membre));
        return membres ;
    }

    @GetMapping("/{id}")
    public Membre detailsMembre(@PathVariable Long id){
        Optional<Membre> membre = membreDAO.findById(id);
        return membre.get();
    }

    @DeleteMapping("/{id}")
    public void deleteMembre(@PathVariable Long id) {
        membreDAO.deleteById(id);
    }

    @PostMapping("")
    public void addmembre(@RequestBody Membre membre) {
        membreDAO.save(membre);
    }

    @PutMapping("")
    public void updatemembre(@RequestBody Membre membre) {
        membreDAO.save(membre);
    }
}
