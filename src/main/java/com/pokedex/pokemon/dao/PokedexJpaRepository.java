package com.pokedex.pokemon.dao;

import com.pokedex.pokemon.entity.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PokedexJpaRepository extends JpaRepository<Pokemon, Integer> {
}
