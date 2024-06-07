package models;

import play.db.jpa.GenericModel;

import javax.persistence.*;

@Entity
@Table(name = "material_bag")
public class MaterialBag extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @Column(name = "player_id")
    public Integer playerId;

    @Column(name = "material_id")
    public Integer materialId;

    @ManyToOne
    @JoinColumn(name = "material_id", insertable = false, updatable = false)
    public Material material;

    @Column(name = "quantity")
    public Integer quantity;

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
    // Material ID
    public Integer getMaterialId() {
        return materialId;
    }
    public void setMaterialId(Integer materialId) {
        this.materialId = materialId;
    }
    // Material
    public Material getMaterial() {
        return material;
    }
    public void setMaterial(Material material) {
        this.material = material;
    }
    // Quantity
    public Integer getQuantity() {
        return quantity;
    }
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
