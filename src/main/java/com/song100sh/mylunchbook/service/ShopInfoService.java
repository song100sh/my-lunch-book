package com.song100sh.mylunchbook.service;

import com.song100sh.mylunchbook.model.ShopInfo;
import com.song100sh.mylunchbook.repository.ShopInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopInfoService {

    private final ShopInfoRepository shopInfoRepository;

    public ShopInfoService(ShopInfoRepository shopInfoRepository) {
        this.shopInfoRepository = shopInfoRepository;
    }

    public List<ShopInfo> getAllShopInfo() {
        return shopInfoRepository.findAll();
    }
}
