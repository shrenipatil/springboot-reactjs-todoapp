package com.user.todo.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class securityConfig extends WebSecurityConfigurerAdapter{
/*
	protected void configure(AuthenticationManagerBuilder auth) throws Exception
	{
	auth.inMemoryAuthentication()
	.passwordEncoder(org.springframework.security.crypto.password.NoOpPasswordEncoder.getInstance())
	.withUser("user").password("user")
	.roles("USER");	
	}
	
	protected void configure(HttpSecurity http) throws Exception
	{
		http.httpBasic().and().authorizeRequests()
		.antMatchers("/**").hasRole("USER").and().csrf().disable().headers().frameOptions().disable();
	}*/
	@Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .csrf().disable()   
        .authorizeRequests()
        .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                .anyRequest().authenticated()
                .and()
            .httpBasic();
    }
	
}