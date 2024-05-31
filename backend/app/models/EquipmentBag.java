package models;

import lombok.Getter;
import lombok.Setter;
import play.db.jpa.GenericModel;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "equipment_bag")
@Getter
@Setter
public class EquipmentBag extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "player_id")
    public Integer playerId;

    @Column(name = "weapon_id")
    public Integer weaponId;

    @Column(name = "armor_id")
    public Integer armorId;

    @Column(name = "accessory_id")
    public Integer accessoryId;

    @Column(name = "quantity")
    public Integer quantity;
}
