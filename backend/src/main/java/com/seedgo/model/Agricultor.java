package com.seedgo.model;
import jakarta.persistence.*; import lombok.Data; import java.time.LocalDate;
@Entity @Table(name="agricultores") @Data
public class Agricultor {
 @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
 @Column(name="id_agricultores") private Integer id;
 private String nome; private String cpf; private String endereco;
 private String telefone; private String email;
 @Column(name="registro_ipa") private String registroIpa;
 @Column(name="data_cadastro") private LocalDate dataCadastro;
}
