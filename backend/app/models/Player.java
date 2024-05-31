package models;

import lombok.Getter;
import lombok.Setter;
import play.db.jpa.Model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import play.db.jpa.GenericModel;

@Entity
@Getter
@Setter
public class Player extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String name;
    public int level;
    public int experience;
}