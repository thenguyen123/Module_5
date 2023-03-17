package com.example.car.servie;

import com.example.car.model.Car;
import com.example.car.repository.ICarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CarService implements  ICarService{
    @Autowired
    private ICarRepository carRepository;
    @Override
    public Page<Car> findAll(Pageable pageable) {
        return carRepository.findAll(pageable);
    }

    @Override
    public void save(Car car) {
      carRepository.create(car.getId(),car.getEmail(),car.getFormHour(),car.getName(),car.getPhoneNumber(),
      car.getToHour(),car.getCarType().getId(),car.getDeparture().getId(),
        car.getDestination().getId());
//carRepository.save(car);
    }

    @Override
    public void delete(String id) {
        carRepository.deleteById(id);
    }

    @Override
    public Car findById(String id) {

        return   carRepository.findById(id).orElse(null);
    }

    @Override
    public void update(Car car) {
        carRepository.edit(car.getId(),car.getEmail(),car.getFormHour(),car.getName(),car.getPhoneNumber(),
                car.getToHour(),car.getCarType().getId(),car.getDeparture().getId(),
                car.getDestination().getId());
    }
}
