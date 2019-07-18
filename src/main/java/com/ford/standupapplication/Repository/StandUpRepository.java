package com.ford.standupapplication.Repository;

import com.ford.standupapplication.Model.StandUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StandUpRepository extends JpaRepository<StandUp, Integer> {
    @Query(value = "SELECT u FROM StandUp u WHERE u.username = ?1")
    List<StandUp> findAllStandUpUsername(String username);


}
