package jsonmodels;

import models.Item;
import models.ItemBag;

public class ItemBagTab {
    public int id;
    public Integer itemId;
    public Integer quantity;
    // item
    public Item item;
    public String name;
    public String effect;
    public String description;
    public Integer price;
    public String imageUrl;

    public ItemBagTab(ItemBag i) {
        this.id = i.getId();
        this.itemId = i.getItemId();
        this.quantity = i.getQuantity();
        this.item = i.item;
        if (item != null) {
            this.name = item.getName();
            this.effect = item.getEffect();
            this.description = item.getDescription();
            this.price = item.getPrice();
            this.imageUrl = item.getImageUrl();
        }
    }
}