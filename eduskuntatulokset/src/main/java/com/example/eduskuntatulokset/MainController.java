package com.example.eduskuntatulokset;

import com.example.eduskuntatulokset.service.ClassificationService;
import org.springframework.web.bind.annotation.*;

import com.example.eduskuntatulokset.models.Answers;

@RestController
@RequestMapping("/api")
public class MainController {

    @GetMapping("/hello")
    @ResponseBody
    public String vaalikysely() throws Exception {
        return ClassificationService.classify(null);
    }

    @PostMapping("/submit")
    public Answers submit(@RequestBody Answers ans) {
        return ans;
    }


}