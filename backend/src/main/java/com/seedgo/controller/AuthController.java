package com.seedgo.controller;
import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/auth") @CrossOrigin
public class AuthController {
 @PostMapping("/login")
 public String login(@RequestBody LoginRequest r){
   if(r.getEmail().equals("admin@admin.com") && r.getSenha().equals("123"))
     return "{\"token\":\"fake-token\"}";
   return "{\"error\":\"Credenciais inválidas\"}";
 }
}
class LoginRequest {
 private String email, senha;
 public String getEmail(){return email;} public String getSenha(){return senha;}
}
