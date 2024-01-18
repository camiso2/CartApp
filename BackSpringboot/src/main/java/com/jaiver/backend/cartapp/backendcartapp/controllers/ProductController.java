package com.jaiver.backend.cartapp.backendcartapp.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jaiver.backend.cartapp.backendcartapp.services.ProductService;

import com.jaiver.backend.cartapp.backendcartapp.models.entities.Product;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
//@RequestMapping("/api")
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public java.util.List<Product> list(){

        return service.findAll();
    }

}
