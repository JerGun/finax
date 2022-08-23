const { connectToDatabase } = require("../../lib/mongodb")
export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getAllIncomes()
    case "PUT":
      return getAllIncomes()
    case "POST":
      return addIncome()
    case "DELETE":
      return getAllIncomes()
    default:
      break
  }
  res.status(200).json({ name: "John Doe" })
}

async function getAllIncomes(req, res) {
  try {
    let { db } = await connectToDatabase()
    let incomes = await db.collection("incomes").find({}).toArray()
    return res.json({
      message: JSON.parse(JSON.stringify(incomes)),
      success: false,
    })
  } catch (erroer) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}

async function addIncome(req, res) {
  try {
    let { db } = await connectToDatabase()
    await db.collection("posts").insertOne(JSON.parse(req.body))
    return res.json({
      message: "Income added successfully",
      success: true,
    })
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}
