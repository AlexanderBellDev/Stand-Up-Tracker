package com.ford.standupapplication.Service;

import com.ford.standupapplication.Model.StandUp;
import com.ford.standupapplication.Repository.StandUpRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class StandUpService {
    private static List<StandUp> standUps = new ArrayList<>();
    private StandUpRepository standUpRepository;

    public StandUpService(StandUpRepository standUpRepository) {
        this.standUpRepository = standUpRepository;
    }

    public List<StandUp> findAll() {

        return standUpRepository.findAll();

    }

    public List<StandUp> findAllByUsername(String username){
        return standUpRepository.findAllStandUpUsername(username);
    }



    public void deleteById(int id) {
     standUpRepository.deleteById(id);
    }

    public StandUp findById(int id) {
        for(StandUp standUp : standUps) {
            if(standUp.getId() == id) {
                return standUp;
            }
        }
        return null;
    }
}
