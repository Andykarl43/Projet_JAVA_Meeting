package io.takima.demo.controllers;

import io.takima.demo.EventsDAO;
import io.takima.demo.models.Events;
import io.takima.demo.models.Membre;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("events")
@RestController
public class EventsController  {

    private final EventsDAO eventsDAO;

    public EventsController(EventsDAO eventsDAO) {
        this.eventsDAO = eventsDAO;
    }

    @GetMapping("")
    public List<Events> listEvents() {
        Iterable<Events> it = eventsDAO.findAll();
        List <Events> events = new ArrayList<>();
        it.forEach(event -> events.add(event));
        return events ;
    }

    @GetMapping("/{id}")
    public Events detailsEvents(@PathVariable Long id){
        Optional<Events> events = eventsDAO.findById(id);
        return events.get();
    }

    @DeleteMapping("/{id}")
    public void deleteEvents(@PathVariable Long id) {
        eventsDAO.deleteById(id);
    }

    @PostMapping("")
    public void addevents(@RequestBody Events events) { eventsDAO.save(events);
    }

    @PutMapping("")
    public void updateevents(@RequestBody Events events){
        eventsDAO.save(events);
    }
}
