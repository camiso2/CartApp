package com.jaiver.backend.cartapp.backendcartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jaiver.backend.cartapp.backendcartapp.models.entities.Product;
import com.jaiver.backend.cartapp.backendcartapp.repositories.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository repository;

    @Override
    @Transactional(readOnly = true)//->solo lectura
    public List<Product> findAll() {
        // iterable to list            
        return (List<Product>) repository.findAll();
    }

    
}
