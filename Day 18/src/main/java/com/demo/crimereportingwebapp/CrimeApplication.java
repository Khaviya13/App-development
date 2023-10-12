package com.demo.crimereportingwebapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication


public class CrimeApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrimeApplication.class, args);
	}

}
