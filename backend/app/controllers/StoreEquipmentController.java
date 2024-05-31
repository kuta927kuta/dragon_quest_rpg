package controllers;

import models.Accessory;
import models.Armor;
import models.Weapon;
import play.mvc.*;
import java.util.*;

import javax.persistence.PersistenceException;

public class StoreEquipmentController extends Controller {
    
    // GET /get-store-equipment StoreEquipmentController.getStoreEquipment
    public static void getStoreEquipment(Long playerId) {
        try {
            List<Armor> armors = Armor.findAll();
            List<Weapon> weapons = Weapon.findAll();
            List<Accessory> accessorys = Accessory.findAll();

            if (armors == null || weapons == null || accessorys == null) {
                renderJSON("Error occurred while fetching equipment data.");
            } else {
                Map<String, Object> equipmentMap = new HashMap<>();
                equipmentMap.put("armors", armors);
                equipmentMap.put("weapons", weapons);
                equipmentMap.put("accessorys", accessorys);
                renderJSON(equipmentMap);
            }
        } catch (PersistenceException e) {
            renderJSON(e);
        }
    }
}