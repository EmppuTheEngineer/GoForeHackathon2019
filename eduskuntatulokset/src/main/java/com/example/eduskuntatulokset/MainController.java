package com.example.eduskuntatulokset;

import org.springframework.web.bind.annotation.RestController;

import com.example.eduskuntatulokset.models.Answers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class MainController {

    @GetMapping("/hello")
    public String vaalikysely() {
        return "Greetings from Spring !";
    }

    @PostMapping("/submit")
    public Answers submit(@RequestBody Answers ans) {
        return ans;
    }


}