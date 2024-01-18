package com.jaiver.backend.cartapp.backendcartapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.jaiver.backend.cartapp.backendcartapp.models.entities.Product;

//IMPORTANTE :: al heredar de crudRepository se registra como un componente
//interface declarativa                           clase entity▼     ID:▼
public interface ProductRepository extends CrudRepository <Product, Long>{

}
