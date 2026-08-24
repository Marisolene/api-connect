const express = require("express");

const app = express();
const PORT = 3000;

const userRoutes = require("./routes/users");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Connect funcionando!"
  });
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
