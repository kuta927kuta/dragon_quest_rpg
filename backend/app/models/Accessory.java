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
    public Long id;

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
}
