package com.example.demo.Controller;
import com.example.demo.Entity.ProductRequest;
import com.example.demo.Service.ProductRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/product-requests")
public class ProductRequestController {

    private final ProductRequestService productRequestService;

    @Autowired
    public ProductRequestController(ProductRequestService productRequestService) {
        this.productRequestService = productRequestService;
    }

    @PostMapping("/add")
    public ProductRequest addProductRequest(@RequestBody ProductRequest productRequest) {
        return productRequestService.addProductRequest(productRequest);
    }

    @GetMapping
    public List<ProductRequest> getAllProductRequests() {
        return productRequestService.getAllProductRequests();
    }

}
