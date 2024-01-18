package com.jaiver.backend.cartapp.backendcartapp.services;

import java.util.List;

import com.jaiver.backend.cartapp.backendcartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();

}
