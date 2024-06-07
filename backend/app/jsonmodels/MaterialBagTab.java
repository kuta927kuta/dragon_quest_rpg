package jsonmodels;

import models.Material;
import models.MaterialBag;

public class MaterialBagTab {
    public int id;
    public Integer materialId;
    public Integer quantity;
    // material
    public Material material;
    public String name;
    public String description;
    public String rarity;
    public Double weight;
    public Integer price;
    // public String imageUrl;

    public MaterialBagTab(MaterialBag m) {
        this.id = m.getId();
        this.materialId = m.getMaterialId();
        this.quantity = m.getQuantity();
        this.material = m.material;
        if (material != null) {
            this.name = material.getName();
            this.description = material.getDescription();
            this.rarity = material.getRarity();
            this.weight = material.getWeight();
            this.price = material.getPrice();
            // this.imageUrl = item.getImageUrl();
        }
    }
}