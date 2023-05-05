package com.example.demo.mapper;

import com.example.demo.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UserMapper {

    //簡略化のため、アノテーションを用いてSQLを記述しているが、本来はXMLを用いること
    //抽出条件がオフセットとサイズのみだが、本来は更に抽出条件が加わる想定になる
    @Select("SELECT * FROM users LIMIT #{size} OFFSET #{offset}")
    List<User> findAll(@Param("offset") int offset, @Param("size") int size);

    @Select("SELECT COUNT(*) FROM users")
    int count();
}