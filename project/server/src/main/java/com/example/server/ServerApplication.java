package com.example.server;

import com.example.server.config.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import javax.annotation.PostConstruct;
import javax.servlet.Filter;
import java.util.TimeZone;

@SpringBootApplication
public class ServerApplication {

	@Bean
	public FilterRegistrationBean jwtFilter(){
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/user/*");
		registrationBean.addUrlPatterns("/site/*");
		registrationBean.addUrlPatterns("/teacher/*");
		registrationBean.addUrlPatterns("/activity/*");
		registrationBean.addUrlPatterns("/join/*");
		registrationBean.addUrlPatterns("/notice/*");
		return registrationBean;
	}

	@PostConstruct
	void started() {
		TimeZone.setDefault(TimeZone.getTimeZone("GMT"));
	}

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

}
