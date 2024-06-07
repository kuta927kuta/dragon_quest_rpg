package models;

import play.db.jpa.GenericModel;
import javax.persistence.*;

@Entity
@Table(name = "equipment_bag")
public class EquipmentBag extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "player_id")
    private Integer playerId;

    @Column(name = "weapon_id")
    private Integer weaponId;

    @ManyToOne
    @JoinColumn(name = "weapon_id", insertable = false, updatable = false)
    public Weapon weapon;

    @Column(name = "armor_id")
    private Integer armorId;

    @ManyToOne
    @JoinColumn(name = "armor_id", insertable = false, updatable = false)
    public Armor armor;

    @Column(name = "accessory_id")
    private Integer accessoryId;

    @ManyToOne
    @JoinColumn(name = "accessory_id", insertable = false, updatable = false)
    public Accessory accessory;

    @Column(name = "quantity")
    private Integer quantity;

    // ID
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    // Player ID
    public Integer getPlayerId() {
        return playerId;
    }
    public void setPlayerId(Integer playerId) {
        this.playerId = playerId;
    }
    // Weapon ID
    public Integer getWeaponId() {
        return weaponId;
    }
    public void setWeaponId(Integer weaponId) {
        this.weaponId = weaponId;
    }
    // Armor ID
    public Integer getArmorId() {
        return armorId;
    }
    public void setArmorId(Integer armorId) {
        this.armorId = armorId;
    }
    // Accessory ID
    public Integer getAccessoryId() {
        return accessoryId;
    }
    public void setAccessoryId(Integer accessoryId) {
        this.accessoryId = accessoryId;
    }
    // Quantity
    public Integer getQuantity() {
        return quantity;
    }
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
