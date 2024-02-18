package com.example.demo.Repository;

import com.example.demo.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, String> {

    Users findByNetID(String netID);

    Users findByEmail(String email);

}
