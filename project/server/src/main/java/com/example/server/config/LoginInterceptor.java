/*package com.example.server.config;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor implements HandlerInterceptor{

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String uid= (String) request.getSession().getAttribute("uid");
        System.out.println("uid is "+uid+" welcome to interceptor!");
        if(uid == null){
            return false;
        }
        else{
            return true;
        }
    }
}*/

