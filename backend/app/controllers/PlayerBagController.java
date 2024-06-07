package controllers;

import models.*;
import jsonmodels.ItemBagTab;
import jsonmodels.MaterialBagTab;
import jsonmodels.EquipmentBagTab;
import play.mvc.*;
import javax.persistence.PersistenceException;
import java.util.*;

public class PlayerBagController extends Controller {

    // 一括取得 未連携
    // public static void getPlayerBag(Long playerId) {
    //     try {
    //         List<ItemBag> itemBags = ItemBag.findByPlayerId(playerId);
    //         List<EquipmentBag> equipmentBags = EquipmentBag.findByPlayerId(playerId);
    //         List<MaterialBag> materialBags = MaterialBag.findByPlayerId(playerId);

    //         if (itemBags == null || equipmentBags == null || materialBags == null) {
    //             renderJSON("Error occurred while fetching player bag data.");
    //         } else {
    //             Map<String, Object> bagMap = new HashMap<>();
    //             bagMap.put("itemBags", itemBags);
    //             bagMap.put("equipmentBags", equipmentBags);
    //             bagMap.put("materialBags", materialBags);
    //             renderJSON(bagMap);
    //         }
    //     } catch (PersistenceException e) {
    //         renderJSON(e);
    //     }
    // }

    // GET /get-player-item-bag/{playerId} アイテム取得
    public static void getItemBag(Integer playerId) {
        try {
            List<ItemBag> itemBags = ItemBag.find("playerId", playerId).fetch();
            List<ItemBagTab> itemBagTabs = new ArrayList<>();

            if (itemBags == null) {
                renderJSON("Error occurred while fetching item bag data.");
            } else {
                for (ItemBag itemBag : itemBags) {
                    ItemBagTab itemBagTab = new ItemBagTab(itemBag);
                    itemBagTabs.add(itemBagTab);
                }
                renderJSON(itemBagTabs);
            }
        } catch (PersistenceException e) {
            renderJSON(e.getMessage());
        }
    }

    // GET /get-player-equipment-bag/{playerId} 装備取得
    public static void getEquipmentBag(Integer playerId) {
        try {
            List<EquipmentBag> equipmentBags = EquipmentBag.find("playerId", playerId).fetch();
            List<EquipmentBagTab> equipmentBagTabs = new ArrayList<>();

            if (equipmentBags == null) {
                renderJSON("Error occurred while fetching equipment bag data.");
            } else {
                for (EquipmentBag equipmentBag : equipmentBags) {
                    EquipmentBagTab equipmentBagTab = new EquipmentBagTab(equipmentBag);
                    equipmentBagTabs.add(equipmentBagTab);
                }
                renderJSON(equipmentBagTabs);
            }
        } catch (PersistenceException e) {
            renderJSON(e.getMessage());
        }
    }

    // GET /get-player-material-bag/{playerId} 素材取得
    public static void getMaterialBag(Integer playerId) {
        try {
            List<MaterialBag> materialBags = MaterialBag.find("playerId", playerId).fetch();
            List<MaterialBagTab> materialBagTabs = new ArrayList<>();

            if (materialBags == null) {
                renderJSON("Error occurred while fetching material bag data.");
            } else {
                for (MaterialBag materialBag : materialBags) {
                    MaterialBagTab materialBagTab = new MaterialBagTab(materialBag);
                    materialBagTabs.add(materialBagTab);
                }
                renderJSON(materialBagTabs);
            }
        } catch (PersistenceException e) {
            renderJSON(e.getMessage());
        }
    }


}
