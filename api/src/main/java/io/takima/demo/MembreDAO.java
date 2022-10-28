package io.takima.demo;

import io.takima.demo.models.Membre;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MembreDAO extends CrudRepository<Membre, Long> {
}
