/* ===================================================
    <구조분해할당>
    배열이나 객체에 들어있는 값을 더 짧고 편하게
    원하는 변수에 나누어 담는 문법   
    
    1. 배열 구조분해할당
    - 순서가 중요
    - 배열 형태로 원하는 갯수만큼 적어주면 됨

    2. 객체 구조분해할당 
    - Key 값이 중요
    - 원하는 변수명으로 받고 싶을 경우
        => { 기존 Key : 새로운 변수명 }

    (+) 중첩 객체에서도 활용 가능
=================================================== */

// 1. 배열
// const fruits = ['apple', 'banana', 'orange'];

// const [a, , b] = fruits;

// console.log(a);
// console.log(b);
// console.log(c);

// 2. 객체
const student = {
  name: '김학생',
  age: 20,
  major: '컴공',
};

const { name: student_name, age: student_age, major } = student;

// console.log(student_name);
// console.log(student_age);
// console.log(major);

const person = {
  username: 'hong',
  city: 'Seoul',
};

// * 객체 정보로 되어있는 값을 바로 함수로 전달해야 하는 경우 *
function printUser({ username, city }) {
  console.log('이름 : ', username);
  console.log('도시 : ', city);
}

printUser(person);
