package com.seedgo.controller;
import com.seedgo.model.Agricultor; import com.seedgo.repository.AgricultorRepository;
import org.springframework.web.bind.annotation.*; import java.util.List;
@RestController @RequestMapping("/api/agricultores") @CrossOrigin
public class AgricultorController {
 private final AgricultorRepository repo;
 public AgricultorController(AgricultorRepository repo){this.repo=repo;}
 @GetMapping public List<Agricultor> listar(){ return repo.findAll();}
 @PostMapping public Agricultor criar(@RequestBody Agricultor a){ return repo.save(a);}
 @PutMapping("/{id}") public Agricultor atualizar(@PathVariable Integer id,@RequestBody Agricultor a){ a.setId(id); return repo.save(a);}
 @DeleteMapping("/{id}") public void deletar(@PathVariable Integer id){ repo.deleteById(id);}
}
