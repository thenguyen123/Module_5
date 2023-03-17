package com.example.car.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Car {
    @Id
    private String id;
    private String name;
    private String email;
    private String toHour;
    private String formHour;
    private String phoneNumber;
    private boolean isDelete;
    @ManyToOne
    @JoinColumn(name = "cartypes_id", referencedColumnName = "id")
    private CarType carType;
    @ManyToOne
    @JoinColumn(name = "departure_id", referencedColumnName = "id")
    private Address departure;
    @ManyToOne
    @JoinColumn(name = "destination_id", referencedColumnName = "id")
    private Address destination;

    public Car() {
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Car(String id, String name, String email, String toHour, String formHour, String phoneNumber, boolean isDelete, CarType carType, Address departure, Address destination) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.toHour = toHour;
        this.formHour = formHour;
        this.phoneNumber = phoneNumber;
        this.isDelete = isDelete;
        this.carType = carType;
        this.departure = departure;
        this.destination = destination;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToHour() {
        return toHour;
    }

    public void setToHour(String toHour) {
        this.toHour = toHour;
    }

    public String getFormHour() {
        return formHour;
    }

    public void setFormHour(String formHour) {
        this.formHour = formHour;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public boolean isisDelete() {
        return isDelete;
    }

    public void setisDelete(boolean isDelete) {
        this.isDelete = isDelete;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }

    public Address getDeparture() {
        return departure;
    }

    public void setDeparture(Address departure) {
        this.departure = departure;
    }

    public Address getDestination() {
        return destination;
    }

    public void setDestination(Address destination) {
        this.destination = destination;
    }
}
