package com.pokedex.pokemon.api;

import com.pokedex.pokemon.entity.Pokemon;
import com.pokedex.pokemon.service.PokedexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;


@RestController
@RequestMapping(path = "/pokemon")
@CrossOrigin(origins="http://localhost:3000")
public class PokedexController {

    private final PokedexService pokedexService;

    @Autowired
    private PokedexController(PokedexService pokedexService) {
        this.pokedexService = pokedexService;
    }

    @GetMapping()
    public List<Pokemon> getAllPokemon() {
        return pokedexService.getAllPokemon();
    }

    @GetMapping(path = "{id}")
    public Pokemon findById(@PathVariable("id") Integer id) {
        return pokedexService.findById(id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteById(@PathVariable("id") int id) {
       pokedexService.deleteById(id);
    }

    @PostMapping()
    public void addPokemon(@RequestBody Pokemon pokemon) {
        pokedexService.addPokemon(pokemon);
    }

//    @GetMapping(path = "/Image/{id}")
//    public void getImage(@PathVariable("id") Integer id, HttpServletResponse response) throws IOException {
//        response.setContentType("image/jpeg, image/jpg, image/png, image/gif");
//        response.getOutputStream().write(pokedexService.getImage(id));
//        response.getOutputStream().close();
//    }

//    @PutMapping(path = "/Image/{id}")
//    public String updateImage(@PathVariable("id") Integer id, @RequestParam("file") MultipartFile image) {
//        try {
//            pokedexService.updateImage(id, image);
//            return "success";
//        }
//        catch (Exception e) { return e.getLocalizedMessage(); }
//
//    }

//    @PostMapping(path = "/login")
//    public @ResponseBody Map<String, Object> login(@RequestParam("username") String username,@RequestParam("password") String password) {
//
//    }

}
