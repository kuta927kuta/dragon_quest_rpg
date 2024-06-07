package jsonmodels;

import models.EquipmentBag;
import models.Armor;
import models.Weapon;
import models.Accessory;

public class EquipmentBagTab {
    public int id;
    public Integer quantity;
    // 各装備
    public Armor armor;
    public Weapon weapon;
    public Accessory accessory;
    //
    public String name;
    public String effect;
    public Integer attack;
    public Integer defense;
    public String description;
    public Integer price;
    public String imageUrl;

    public EquipmentBagTab(EquipmentBag e) {
        this.id = e.getId();
        this.quantity = e.getQuantity();
        this.armor = e.armor;
        this.weapon = e.weapon;
        this.accessory = e.accessory;
        if (armor != null) {
            this.name = armor.getName();
            this.defense = armor.getDefense();
            this.description = armor.getDescription();
            this.price = armor.getPrice();
            this.imageUrl = armor.getImageUrl();
        }
        if (weapon != null) {
            this.name = weapon.getName();
            this.attack = weapon.getAttack();
            this.description = weapon.getDescription();
            this.price = weapon.getPrice();
            this.imageUrl = weapon.getImageUrl();
        }
        if (accessory != null) {
            this.name = accessory.getName();
            this.effect = accessory.getEffect();
            this.description = accessory.getDescription();
            this.price = accessory.getPrice();
            this.imageUrl = accessory.getImageUrl();
        }
    }
}