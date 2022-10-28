package io.takima.demo;

import io.takima.demo.models.Events;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsDAO extends CrudRepository<Events, Long> {
}
