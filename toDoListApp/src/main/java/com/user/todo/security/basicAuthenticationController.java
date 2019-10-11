package com.user.todo.security;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins={ "http://localhost:3000"})
@RestController
public class basicAuthenticationController {

	@GetMapping(path = "/todo/basicauth")
    public authenticationBean authenticate() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
        return new authenticationBean("You are authenticated");
    }   
}
