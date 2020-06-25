package com.pokedex.pokemon.service;

import com.pokedex.pokemon.dao.PokedexJpaRepository;
import com.pokedex.pokemon.entity.Pokemon;
import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class PokedexService {

    private final PokedexJpaRepository pokedexJpaRepository;

    @Autowired
    public PokedexService(PokedexJpaRepository pokedexJpaRepository) {
        this.pokedexJpaRepository = pokedexJpaRepository;
    }

    public void addPokemon(Pokemon pokemon) {
        pokedexJpaRepository.save(pokemon);
    }

    public List<Pokemon> getAllPokemon() {
        return pokedexJpaRepository.findAll();
    }

    public Pokemon findById(Integer id) {
        return pokedexJpaRepository.getOne(id);
    }

    public void deleteById(Integer id) {
        pokedexJpaRepository.deleteById(id);
    }

    public void updateImage(Integer id, @NotNull MultipartFile image) throws IOException {
    }
}

