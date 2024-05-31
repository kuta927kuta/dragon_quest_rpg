package controllers;

import play.*;
import play.mvc.*;
import java.util.*;
import models.*;

public class PlayerController extends Controller {

    // GET /players
    public static void getPlayers() {
        List<Player> players = Player.findAll();
        renderJSON(players);
    }

    // GET /player/:id
    // public static void getPlayer(Long id) {
    //     System.out.println("バックエンドOK");
    //     Player player = Player.findById(id);
    //     renderJSON(player);
    // }
}

