package controllers;

import models.Item;
import play.mvc.*;
import java.util.*;

import javax.persistence.PersistenceException;

public class StoreItemController extends Controller {
    
    // GET /get-store-item StoreItemController.getStoreItem
    public static void getStoreItem(Long playerId) {
        try {
            List<Item> items = Item.findAll();

            if (items == null) {
                renderJSON("Error occurred while fetching equipment data.");
            } else {
                renderJSON(items);
            }
        } catch (PersistenceException e) {
            renderJSON(e);
        }
    }
}