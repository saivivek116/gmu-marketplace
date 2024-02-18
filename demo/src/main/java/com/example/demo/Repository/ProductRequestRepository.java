package com.example.demo.Repository;
import java.util.*;
import com.example.demo.Entity.ProductRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRequestRepository extends JpaRepository<ProductRequest, Integer> {
    List<ProductRequest> findByNetID(String netID);

}
