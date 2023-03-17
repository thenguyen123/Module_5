package com.example.car.controller;

import com.example.car.model.Car;
import com.example.car.servie.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/car")
public class CarController {
    @Autowired
    private ICarService iCarService;
    @GetMapping("")
    public ResponseEntity findAll(){
        Pageable pageable= PageRequest.of(0, 3);
        Page<Car> carPage=this.iCarService.findAll(pageable);
        if(carPage.isEmpty()){
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }   return new ResponseEntity(carPage,HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity create(@RequestBody Car car){
        iCarService.save(car);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable String id ){
        iCarService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity findById(@PathVariable String id){
      Car car  = iCarService.findById(id);
      if(car == null){
          return new ResponseEntity(HttpStatus.NO_CONTENT);
      }
     return new ResponseEntity(car, HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity update(@RequestBody Car car){
        iCarService.update(car);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
