const daysOfWeek = ["월","화","수","목","금","토","일"]
console.log("✏️ - daysOfWeek: ", daysOfWeek)

const today = daysOfWeek[1]
console.log("✏️ - today: ", today)

const favoriteday = daysOfWeek[5]
console.log("✏️ - favoriteday: ", favoriteday)

const student = {
  name: "tom",
  mbti: "entj",
  isMale: false,
  useAi : ["chat GPT", "Gemini"]
}

const studentName = student["name"]
console.log("✏️ - studentName:", studentName)

const studentAi = student.useAi
console.log("✏️ - studentAi:", studentAi, typeof studentAi, Array.isArray("studentAi"))
