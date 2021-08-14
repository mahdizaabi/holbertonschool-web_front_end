package com.mahdi.myapp.controllers;


import com.mahdi.myapp.services.JokeService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class JokeController {
    private final JokeService jokeServie;

    public JokeController(JokeService jokeServie) {
        this.jokeServie = jokeServie;
    }


    @RequestMapping({"/", ""})
    public String showJoke(Model model){
        model.addAttribute("joke", jokeServie.getJoke());
        return "index";
    }


}
