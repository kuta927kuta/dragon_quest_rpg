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
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

@Entity
@Table(name = "player_detail")
@Getter
@Setter
public class PlayerDetail extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "player_id")
    public Integer playerId;

    @ManyToOne
    @JoinColumn(name = "player_id", insertable = false, updatable = false)
    public Player player;

    @Column(name = "hp")
    public Integer hp;

    @Column(name = "mp")
    public Integer mp;

    @Column(name = "attack")
    public Integer attack;

    @Column(name = "defense")
    public Integer defense;

    @Column(name = "magic")
    public Integer magic;

    @Column(name = "agility")
    public Integer agility;

    @Column(name = "luck")
    public Integer luck;

    @Column(name = "weapon_id")
    public Integer weaponId;

    @Column(name = "armor_id")
    public Integer armorId;

    @Column(name = "accessory_id")
    public Integer accessoryId;

    @Column(name = "experience")
    public Integer experience;

    @Column(name = "money")
    public Integer money;

    @ManyToOne
    @JoinColumn(name = "weapon_id", insertable = false, updatable = false) // name: 外部キーのカラム insertable: このカラムがINSERT文に含まれるかどうか updatable: このカラムがUPDATE文に含まれるかどうか
    public Weapon weapon;

    @ManyToOne
    @JoinColumn(name = "armor_id", insertable = false, updatable = false)
    public Armor armor;

    @ManyToOne
    @JoinColumn(name = "accessory_id", insertable = false, updatable = false)
    public Accessory accessory;
}


