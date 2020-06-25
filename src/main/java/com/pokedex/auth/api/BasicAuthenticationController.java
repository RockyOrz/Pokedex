package com.pokedex.auth.api;

import com.pokedex.auth.bean.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:3000")
@RestController
public class BasicAuthenticationController {

    @PostMapping(path = "/authenticate")
    public AuthenticationBean authenticate() {
        return new AuthenticationBean("You are authenticated");
    }
}
