const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose
  .connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4  // 👈 forces IPv4
})
  .then(() => {
    console.log(`MongoDB is connected to the host : ${process.env.PORT}`)
  })
}

module.exports = connectDatabase