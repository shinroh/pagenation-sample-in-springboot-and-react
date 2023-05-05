package com.example.demo.controller;

import com.example.demo.mapper.UserMapper;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserMapper userMapper;

    //サンプルのため、直接コントローラーにロジックを記載しているが、本来はサービスクラスにロジックを分離すること
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/users")
    public Page<User> getUsers(@RequestParam(required = false, defaultValue = "0") int page,
                               @RequestParam(required = false, defaultValue = "10") int size) {
        List<User> users = userMapper.findAll(page * size, size);
        int totalUsers = userMapper.count();
        return new PageImpl<>(users, PageRequest.of(page, size), totalUsers);
    }
}