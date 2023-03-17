package com.example.car.controller;

import com.example.car.model.Address;
import com.example.car.model.CarType;
import com.example.car.servie.ICarTypesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CartypeController {
    @Autowired
    private ICarTypesService iCarTypesService;
    @GetMapping("cartypes")
    public ResponseEntity findAll(){
        List<CarType> list=this.iCarTypesService.findAll();
        if(list.isEmpty()){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }   return new ResponseEntity(list,HttpStatus.OK);
    }
}
