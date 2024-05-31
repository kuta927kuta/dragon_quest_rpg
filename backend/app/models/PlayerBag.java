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
@Table(name = "player_bag")
@Getter
@Setter
public class PlayerBag extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "player_id")
    public Integer playerId;

    @Column(name = "item_id")
    public Integer itemId;

    @Column(name = "quantity")
    public Integer quantity;
}
