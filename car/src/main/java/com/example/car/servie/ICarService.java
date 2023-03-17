package com.example.car.servie;

import com.example.car.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICarService {
    Page<Car> findAll(Pageable pageable);
    void save(Car car);
    void  delete(String id);
    Car findById(String id);
    void update(Car car);
}
