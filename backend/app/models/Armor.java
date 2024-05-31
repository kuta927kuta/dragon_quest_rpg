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
@Table(name = "armor")
@Getter
@Setter
public class Armor extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(name = "armor_id")
    public Integer armorId;

    @Column(name = "name")
    public String name;

    @Column(name = "defense")
    public Integer defense;

    @Column(name = "description")
    public String description;

    @Column(name = "price")
    public Integer price;

    @Column(name = "image_url")
    public String imageUrl;
}
