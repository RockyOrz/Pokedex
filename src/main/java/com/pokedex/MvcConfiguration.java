//package com.pokedex;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//
//@EnableWebMvc
//@Configuration
//public class MvcConfiguration extends WebMvcConfigurerAdapter {
//
//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//
//        registry.addResourceHandler("/static/**")
//            .addResourceLocations("/src/main/frontend/public");
//        registry.addResourceHandler("/*.js")
//            .addResourceLocations("/src/main/frontend/src/");
//        registry.addResourceHandler("/*.json")
//            .addResourceLocations("/src/main/frontend/src/");
//        registry.addResourceHandler("/index.html")
//            .addResourceLocations("/src/main/frontend/public/index.html");
//    }
//
//
//
//}
