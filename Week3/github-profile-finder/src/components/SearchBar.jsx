import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";


const SearchBar = ({ setUserInfo }) => {
        const [user,setUser] = useState("");
        const handleChange = (e) => {
            setUser(e.target.value);
        };
        // 이 값을 submit했을 때 검색이 되도록,
        // input 태그를 form 태그로 감싸고, onSubmit 이벤트를 사용하는 것

        const handleSubmit = async (e) => {
            // submit하면 기본적으로 새로고침이 됨. 이것을 방지하기 위해서! preventDefault사용!
            e.preventDefault();
            // user 값을 이용하여 정보를 받아오자!
            // 서버에 있는 데이터를 받아오는 방법 -> 온라인에 올라와있는 데이터를 받아오자!
            // 서버 통신이 필요하다 -> 서버 통신에는 받아오는데 시간이 걸린다 -> 비동기다
            // 비동기 처리를 하기 위한 방법 -> async await
            // azios는 서버통신을 도와주는 툴
            // get은 받아온다는 의미이고, REST API의 한 종류이다.

            const { data } = await axios.get(`https://api.github.com/users/${user}`);
            // 구조분해할당 (deconstructing)
            setUserInfo(data);
        };

/*
    // 구조분해할당 설명
    // 서버에서 받아온 데이터 중 data 프로퍼티를 data라는 이름으로 저장할게

    const abc = {
        a: 3,
        b: 5,
        c: 7,
    }
    const a = abc.a;

    const { a } = abc
    // abc 안에 있는 프로퍼티 a를 a라는 이름으로 설정할게
*/

    return (
        <form onSubmit={handleSubmit}>
            <Input value={user}
            onChange={handleChange}
            type="text" placeholder="Github 프로필을 검색해보세요" />
        </form>
    );
};

export default SearchBar;

const Input = styled.input`
    width: 320px;
    height: 57px;
    padding: 16px;
    color: rgb(229,230,231);
    background-color: rgb(36,49,43);
    outline: none;
    border: 8px solid rgba(105,105,105,0.5);
    border-radius: 20px;
`;