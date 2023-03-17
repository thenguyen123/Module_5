package com.example.car.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Address {
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
   private String name;
    @JsonIgnore
   @OneToMany(mappedBy = "departure")
    private Set<Car> carSet;
   @JsonIgnore
   @OneToMany(mappedBy = "destination")
    private Set<Car> carSet1;

    public Address() {
    }

    public Address(int id, String name, Set<Car> carSet, Set<Car> carSet1) {
        this.id = id;
        this.name = name;
        this.carSet = carSet;
        this.carSet1 = carSet1;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Car> getCarSet() {
        return carSet;
    }

    public void setCarSet(Set<Car> carSet) {
        this.carSet = carSet;
    }

    public Set<Car> getCarSet1() {
        return carSet1;
    }

    public void setCarSet1(Set<Car> carSet1) {
        this.carSet1 = carSet1;
    }
}
