package com.song100sh.mylunchbook.controller;

import com.song100sh.mylunchbook.model.ShopInfo;
import com.song100sh.mylunchbook.service.ShopInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ShopInfoController {

    @Autowired
    private ShopInfoService shopInfoService;

    @GetMapping("/shop")
    public List<ShopInfo> getAllShopInfo() {
        return shopInfoService.getAllShopInfo();
    }

}
