package io.takima.demo;

import io.takima.demo.models.Salle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalleDAO extends CrudRepository<Salle, Long> {
}
