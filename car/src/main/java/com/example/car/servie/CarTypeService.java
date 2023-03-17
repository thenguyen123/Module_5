package com.example.car.servie;

import com.example.car.model.CarType;
import com.example.car.repository.ICarTypesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CarTypeService implements ICarTypesService{
    @Autowired
    private ICarTypesRepository iCarTypesRepository;
    @Override
    public List<CarType> findAll() {
        return iCarTypesRepository.findAll();
    }
}
