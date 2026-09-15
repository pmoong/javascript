
let i;
for (i = 0; i < 5; i++) {
  console.log(`${i}번째 실행중`);
}
console.log("i", i)

const resceneMembers = ["woni", "minami", "may", "liv", "zena"];
for (let i = 0; i < resceneMembers.length; i++) {
  console.log(resceneMembers[i]);
}

resceneMembers.forEach(function(member) {
  console.log(member);
});

resceneMembers.forEach((member, index)=>{
  console.log(`${index+1}번째 멤버: ${member.toUpperCase()}`);
});

const resceneKoreaMembers = ["woni", "minami", "may", "liv", "zena"];
const emojiMembers = resceneKoreaMembers.map((member)=>{
  return `😊${member}👌`;
});
console.log(emojiMembers)

const filterMember = resceneKoreaMembers.filter((member) => {
  return member.length > 3;
});
console.log(filterMember);

const findMember = resceneKoreaMembers.find((member) => {
  return member.length >= 2;
});
console.log(findMember);

const everyMember = resceneMembers.every((member) => {
  return member === member.toLowerCase();
});
console.log(everyMember);

const someMember = resceneMembers.some((member) => {
  return member.startsWith("m");
});
console.log(someMember);