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
        return standUpRepository.findById(id).orElse(new StandUp());
    }

    public void updateStandUp(StandUp standup){
        standUpRepository.save(standup);
    }

    public void createStandUp(StandUp standup){
        standUpRepository.save(standup);
    }
}
