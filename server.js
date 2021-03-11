const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
// Import routes
const users = require("./routes/api/users")
const profile = require("./routes/api/profile")
const posts = require("./routes/api/posts")

const app = express()

// Body parser middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// DB Config
const db = require("./config/keys").mongoURI

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport config
require("./config/passport")(passport)

// Use Routes
app.use("/api/users", users)
app.use("/api/profile", profile)
app.use("/api/posts", posts)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
