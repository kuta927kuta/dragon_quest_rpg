package controllers;

import models.PlayerDetail;
import play.mvc.*;

import javax.persistence.PersistenceException;

public class PlayerDetailController extends Controller {

    // HTTPステータスコード、レスポンスのボディ、および他の必要な情報を含んでる
    public static void getPlayerDetail(Long playerId) {
        try {
            PlayerDetail playerDetail = PlayerDetail.findById(playerId);
            if (playerDetail != null) {
                renderJSON(playerDetail);
                // return ok(playerDetail.toJson());
            } else {
                renderJSON("error");
                // return notFound("Player detail not found for player with ID: " + playerId);
            }
        } catch (PersistenceException e) {
            renderJSON(e);
            // return internalServerError("Error retrieving player detail: " + e.getMessage());
        }
    }
}