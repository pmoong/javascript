const score = 55;

if(score >= 60){
  console.log("합격")
}else {
  console.log("불합격")
}

score >= 60 ? console.log("⭕합격") : console.log("❌불합격")

console.log(score >= 60 ? "⭕합격" : "❌불합격")

let grade;

if (score >= 90) {
  grade = "A"
} else if (score >= 80) {
  grade = "B"
} else if (score >= 70) {
  grade = "C"
} else {
  grade = "D"
}

const userInput = "";
if(!userInput){
  console.log("입력값이 없으니 입력해주세요");
}