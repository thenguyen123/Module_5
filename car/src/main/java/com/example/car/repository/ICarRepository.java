package com.example.car.repository;

import com.example.car.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ICarRepository extends JpaRepository<Car, String> {
    @Query(value = "select * from car where is_delete=false" , nativeQuery = true)
    Page<Car> findAll(Pageable pageable );

}
