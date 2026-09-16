// 로그인된 관리자만 접근가능하게.
const user = {
  isLoggedin: true,
  role: "user"
}

if(user.isLoggedin && user.role === "admin") {
console.log("⭕ 관리자페이지 접근가능")
}
else{
  console.log("❌ 관리자페이지 접근불가")
}

if(user.isLoggedin || user.role === "admin") {
console.log("⭕ 회원페이지 접근가능")
}
else{
  console.log("❌ 회원페이지 접근불가")
}

if(!user.isLoggedin){
//로그인x
}

const userage = 33;

const msg = userage >= 18 ? "성인입니다" : "성인이아닙니다"
console.log(msg)

//spread syntax
const resceneMembers = ["woni", "minami", "may", "liv", "zena"];
console.log("resceneMembers : ", resceneMembers);

// const copyMembers = [...resceneMembers, "박보영"]
const copyMembers = ["박보영",...resceneMembers]
console.log("copyMembers : ", copyMembers);

const copyUser = {...user, age : 33, isLoggedin : false}
console.log("user : ", user)
console.log("copyUser : ", copyUser)