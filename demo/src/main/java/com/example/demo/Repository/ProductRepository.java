package com.example.demo.Repository;
import java.util.*;
import com.example.demo.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    List<Product> findByNetID(String netID);

}
