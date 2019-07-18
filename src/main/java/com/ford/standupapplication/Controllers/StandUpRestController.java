package com.ford.standupapplication.Controllers;

import com.ford.standupapplication.Model.StandUp;
import com.ford.standupapplication.Service.StandUpService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StandUpRestController {

    private StandUpService standUpService;

    public StandUpRestController(StandUpService standUpService) {
        this.standUpService = standUpService;
    }

    @GetMapping("/users/{username}/standup")
    public List<StandUp> getAllTodos(@PathVariable String username) {
        return standUpService.findAllByUsername(username);
    }

    @GetMapping("/users/{username}/standup/{id}")
    public StandUp getTodo(@PathVariable String username, @PathVariable int id){
        return standUpService.findById(id);
    }

    @DeleteMapping("/users/{username}/standup/{id}")
    public ResponseEntity<?> deleteStandUp( @PathVariable String username,
                                            @PathVariable int id){
     standUpService.deleteById(id);
    return new ResponseEntity<>(HttpStatus.OK);
    }
}
