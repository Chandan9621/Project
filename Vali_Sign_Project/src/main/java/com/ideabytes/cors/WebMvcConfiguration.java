//package com.ideabytes.cors;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@EnableWebMvc
//public class WebMvcConfiguration extends WebMvcConfigurerAdapter {
//
//	@Override
//	public void addCorsMappings(CorsRegistry registry) {
//		registry.addMapping("/**").
//        allowedOrigins("*").
//        allowedMethods("*").
//        allowedHeaders("*").
//        allowCredentials(true);
//	}
//}