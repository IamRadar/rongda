package com.example.server.dao;

import com.example.server.entity.Join;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface JoinRepository extends JpaRepository<Join,String> {

}
