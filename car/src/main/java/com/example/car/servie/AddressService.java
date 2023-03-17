package com.example.car.servie;

import com.example.car.model.Address;
import com.example.car.repository.IAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AddressService implements IAddressService{
    @Autowired
    private IAddressRepository iAddressRepository;
    @Override
    public List<Address> findAll() {
        return iAddressRepository.findAll();
    }
}
