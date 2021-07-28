package com.song100sh.mylunchbook.service;

import com.song100sh.mylunchbook.model.ShopInfo;
import com.song100sh.mylunchbook.repository.ShopInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopInfoService {

    @Autowired
    private ShopInfoRepository shopInfoRepository;

    public List<ShopInfo> getAllShopInfo() {
        return shopInfoRepository.findAll();
    }
}
