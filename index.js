console.log("Hello js")

const username = "student";
console.log("username",username)

const num = 10;
console.log("✏️ ~ num:", num, "num type", typeof num)

const text = "안녕하세요";
console.log("✏️ ~ text:", text, "text type", typeof text)

const isDarkMode = true;
console.log("✏️ ~ isDarkMode:", isDarkMode, "isDarkMode type", typeof isDarkMode)

const empty = null;
console.log("✏️ ~ empty:", empty, "empty type", typeof empty)

function greeting(){
  console.log(`${username} 님 반갑습니다.`)
}
greeting();

const greeting2 = (usermbti) => {
  console.log(`${username} 님 -> 반갑습니다.`)
  console.log(`MBTI는 ${usermbti}이군요.`)
}
greeting2();
greeting2("estj");
greeting2("enfp");

const greeting3 = () => {
  console.log(`프론트엔드부터 만드는 AI챗봇 수강생 ${username}입니다.`)
}
greeting3();

const greeting4 = (studentname, usermbti) => {
  console.log(`${studentname}님, 반갑습니다.`)
  console.log(`MBTI는 ${usermbti}이군요.`)
}
greeting4("tom", "isfj");

const add = (num1, nmu2) => {
  return num1 + nmu2;
}

const sum = add(10,20)
console.log("✏️ ~ sum:", sum)

const doublesum = (num) => {
  console.log("✏️ ~ num:", num)
  return num * 2;
}

console.log("doublesum", doublesum(sum))