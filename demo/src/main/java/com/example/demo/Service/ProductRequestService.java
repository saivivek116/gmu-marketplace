package com.example.demo.Service;
import com.example.demo.Entity.ProductRequest;
import com.example.demo.Repository.ProductRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ProductRequestService {

    private final ProductRequestRepository productRequestRepository;

    @Autowired
    public ProductRequestService(ProductRequestRepository productRequestRepository) {
        this.productRequestRepository = productRequestRepository;
    }

    public ProductRequest addProductRequest(ProductRequest productRequest) {
        productRequest.setDateRequested(new Date());
        return productRequestRepository.save(productRequest);
    }

    public List<ProductRequest> getAllProductRequests() {
        return productRequestRepository.findAll();
    }

}
