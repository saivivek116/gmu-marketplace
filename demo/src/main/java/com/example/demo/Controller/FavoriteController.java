package com.example.demo.Controller;
import com.example.demo.Entity.Favorite;
import com.example.demo.Service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/favorites")
public class FavoriteController {

    private final FavoriteService favoriteService;

    @Autowired
    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @PostMapping
    public Favorite addFavorite(@RequestBody Favorite favorite) {
        return favoriteService.addFavorite(favorite);
    }

}
