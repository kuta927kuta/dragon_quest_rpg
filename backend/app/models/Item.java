package models;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import play.db.jpa.GenericModel;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "item")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Item extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @Column(name = "name")
    public String name;

    @Column(name = "effect")
    public String effect;

    @Column(name = "description")
    public String description;

    @Column(name = "price")
    public Integer price;

    @Column(name = "image_url")
    public String imageUrl;

    // getter setter
    public void setId(int id) {
		this.id = id;
	}
	public int getId() {
		return this.id;
	}

    public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return this.name;
	}

    public void setEffect(String effect) {
		this.effect = effect;
	}
	public String getEffect() {
		return this.effect;
	}
	
    public void setDescription(String description) {
		this.description = description;
	}
    public String getDescription() {
		return this.description;
	}
	
    public void setPrice(Integer price) {
		this.price = price;
	}
    public Integer getPrice() {
		return this.price;
	}
	
    public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
    public String getImageUrl() {
		return this.imageUrl;
	}
}
