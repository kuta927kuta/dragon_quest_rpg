package models;

// import lombok.Getter;
// import lombok.Setter;
import play.db.jpa.GenericModel;
import javax.persistence.*;

@Entity
@Table(name = "item_bag")
// @Getter
// @Setter
public class ItemBag extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "player_id")
    private Integer playerId;

    @Column(name = "item_id")
    private Integer itemId;

    @ManyToOne
    @JoinColumn(name = "item_id", insertable = false, updatable = false)
    public Item item;

    @Column(name = "quantity")
    private Integer quantity;


    public void setId(int id) {
		this.id = id;
	}
	public int getId() {
		return this.id;
	}
    public void setItemId(Integer itemId) {
		this.itemId = id;
	}
	public Integer getItemId() {
		return this.itemId;
	}
    public void setQuantity(Integer quantity) {
		this.quantity = id;
	}
	public Integer getQuantity() {
		return this.id;
	}
}
