package com.example.car.repository;

import com.example.car.model.CarType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarTypesRepository extends JpaRepository<CarType, Integer> {
}
