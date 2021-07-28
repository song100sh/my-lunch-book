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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer local_index;

    @Column(name = "localName")
    private String localName;

    @Column(name = "shopName")
    private String shopName;

    @Column(name = "foodName")
    private String foodName;
}
