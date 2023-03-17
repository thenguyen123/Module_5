package com.example.car.controller;

import com.example.car.model.Address;
import com.example.car.model.Car;
import com.example.car.servie.IAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class AddressController {
    @Autowired
    private IAddressService iAddressService;
    @GetMapping("address")
    public ResponseEntity findAll(){

  List<Address> list=this.iAddressService.findAll();
        if(list.isEmpty()){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }   return new ResponseEntity(list,HttpStatus.OK);
    }
}
