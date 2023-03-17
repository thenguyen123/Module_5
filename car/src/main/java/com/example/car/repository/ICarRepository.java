package com.example.car.repository;

import com.example.car.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface ICarRepository extends JpaRepository<Car, String> {
    @Query(value = "select * from car where is_delete=false", nativeQuery = true)
    Page<Car> findAll(Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO `car` (`id`, `email`, `form_hour`, `is_delete`, `name`, `phone_number`, `to_hour`, " +
            "`cartypes_id`, `departure_id`, `destination_id`) " +
            "VALUES (:id, :email, :form_hour,false, :name, :phone_number, :to_hour,:cartypes_id,:departure_id,:destination_id)", nativeQuery = true)
    void create(@Param("id") String id,
                @Param("email") String email,
                @Param("form_hour") String form_hour,
                @Param("name") String name,
                @Param("phone_number") String phone_number,
                @Param("to_hour") String to_hour,
                @Param("cartypes_id") int cartypes_id,
                @Param("departure_id") int departure_id,
                @Param("destination_id") int destination_id);

@Modifying
@Transactional
    @Query(value = "UPDATE `car` SET `email` = :email, `is_delete`=false,  `form_hour` =:form_hour, `name` =:name, `phone_number` =:phone_number, `to_hour` =:to_hour, `cartypes_id` =:cartypes_id, `departure_id` =:departure_id, `destination_id` =:destination_id WHERE (`id` =:id)" , nativeQuery = true)
void edit(@Param("id") String id,
          @Param("email") String email,
          @Param("form_hour") String form_hour,
          @Param("name") String name,
          @Param("phone_number") String phone_number,
          @Param("to_hour") String to_hour,
          @Param("cartypes_id") int cartypes_id,
          @Param("departure_id") int departure_id,
          @Param("destination_id") int destination_id);

}

