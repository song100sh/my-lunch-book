package com.song100sh.mylunchbook.model;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name="locations")
@DynamicInsert
@DynamicUpdate
public class ShopInfo {

    @Id
    @Column(name = "local_index")
    private Integer localIndex;

    @Column(name = "local_name")
    private String localName;

    @Column(name = "shop_name")
    private String shopName;

    @Column(name = "food_name")
    private String foodName;
}
