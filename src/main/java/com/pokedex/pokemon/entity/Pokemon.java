package com.pokedex.pokemon.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pokemon {
    @Id
    private Integer id;
    private String pokemon_name;
    private String main_type;
    private String sub_type;

    public Pokemon() {
    }

    public Pokemon(Integer id, String pokemon_name, String main_type, String sub_type, byte[] image) {
        this.id = id;
        this.pokemon_name = pokemon_name;
        this.main_type = main_type;
        this.sub_type = sub_type;
    }

    @Id
    public int getId() {
        return this.id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    public String getPokemon_name(){
        return this.pokemon_name;
    }

    public void setPokemon_name(String pokemon_name){
        this.pokemon_name = pokemon_name;
    }

    public String getMain_type(){
        return this.main_type;
    }

    public void setMain_type(String main_type){
        this.main_type = main_type;
    }

    public void setSub_type(String sub_type){
        this.sub_type = sub_type;
    }

    public String getSub_type(){
        return this.sub_type;
    }

    @Override
    public String toString() {
        return "Pokemon{" +
                "id=" + id +
                ", pokemon_name='" + pokemon_name + '\'' +
                ", main_type='" + main_type + '\'' +
                ", sub_type='" + sub_type + '\'' +
                '}';
    }
}
