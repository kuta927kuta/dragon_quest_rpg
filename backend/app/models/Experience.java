package models;

import lombok.Getter;
import lombok.Setter;
import play.db.jpa.GenericModel;
import javax.persistence.*;

@Entity
@Table(name = "experience")
@Getter
@Setter
public class Experience extends GenericModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "level")
    private Integer level;

    @Column(name = "next")
    private Integer next;

    @Column(name = "total")
    private Integer total;
}
