import { useState } from "react";
export default function Login({onLogin}){
 const [email,setEmail]=useState(""); const [senha,setSenha]=useState("");
 async function logar(){
  const r=await fetch("http://localhost:8080/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,senha})});
  const d=await r.json(); if(d.token) onLogin(d.token); else alert("Erro");
 }
 return (<div><h2>Login</h2>
  <input onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
  <input onChange={e=>setSenha(e.target.value)} placeholder="Senha" type="password"/>
  <button onClick={logar}>Entrar</button></div>);
}