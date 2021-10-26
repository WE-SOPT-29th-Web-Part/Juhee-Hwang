"use strict";

const inputs = document.querySelectorAll("input");
const addBtn = document.querySelectorAll(".todos__add");
const items = document.querySelectorAll(".todos__items");
const nav = document.querySelectorAll("nav");
const navBtn = document.querySelectorAll("nav > button");
const todos = document.querySelectorAll(".todos");

// 옵션 버튼
nav.addEventListener("click", (e) => {
    if(e.target.tagName !== "BUTTON") return;

    switch (e.target.className) {
        case "nav__today":
          todos[0].classList.add("open");
          todos[1].classList.remove("open");
          break;
        case "nav__tomorrow":
          todos[0].classList.remove("open");
          todos[1].classList.add("open");
          break;
        case "nav__together":
          todos[0].classList.add("open");
          todos[1].classList.add("open");
          break;
      }
});

// 리스트 추가 버튼 클릭 시
addBtn.forEach((btn, index) => 
    btn.addEventListener("click", () => onAdd(index))
);

// enter 눌렀을 때 리스트 추가
inputs.forEach((input, index) => 
    input.addEventListener("keyup", (e) => {
        if (e.key == "Enter") {
            onAdd(index);
        }
    })
);

// to-do-item 추가
function createItem(text, index){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;

    const icon = document.createElement("i");
    icon.setAttribute("class", "");

    li.appendChild(span);
    li.appendChild(icon);

    icon.addEventListener("click", () => {
        items[index].removeChild(li);
    });

    return li;
}


function onAdd(index) {
    const text = inputs[index].value;
    if(!text) return;
    
    const item = createItem(text, index);
    items[index].appendChild(item);
    inputs[index].value = "";
    inputs[index].focus();
}