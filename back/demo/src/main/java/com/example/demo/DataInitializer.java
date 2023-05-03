package com.example.demo;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        // サンプルデータを作成し、保存します
        User user1 = new User();
        user1.setName("John Doe");
        user1.setAge(20);
        user1.setGender("male");
        userRepository.save(user1);

        User user2 = new User();
        user1.setName("John Doe");
        user1.setAge(20);
        user1.setGender("male");
        userRepository.save(user2);

        // 他にもデータが必要な場合、同様に追加していきます
    }
}
