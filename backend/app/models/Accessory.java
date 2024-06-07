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
@Table(name = "accessory")
@Getter
@Setter
public class Accessory extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "effect")
    private String effect;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Integer price;

    @Column(name = "image_url")
    private String imageUrl;

    // ID
    public int getId() {
        return id;
    }
    // Name
    public String getName() {
        return name;
    }
    // Effect
    public String getEffect() {
        return effect;
    }
    // Description
    public String getDescription() {
        return description;
    }
    // Price
    public Integer getPrice() {
        return price;
    }
    // Image URL
    public String getImageUrl() {
        return imageUrl;
    }
}
