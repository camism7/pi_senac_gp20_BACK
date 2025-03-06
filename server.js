require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
});

const User = mongoose.model("User", UserSchema);

// Definição do modelo de Agendamento
const AgendamentoSchema = new mongoose.Schema({
  userId: String,
  data: String,
  hora: String,
  medico: String,
});

const Agendamento = mongoose.model("Agendamento", AgendamentoSchema);

const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Acesso negado." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido." });
    }

    req.userId = decoded.userId;
    next();
  });
};

// Criar um agendamento
app.post("/agendamentos", authenticate, async (req, res) => {
  try {
    const { data, hora, medico } = req.body;
    const novoAgendamento = new Agendamento({
      userId: req.userId,
      data: data,
      hora: hora,
      medico: medico,
    });
    await novoAgendamento.save();
    res.status(201).json({ message: "Agendamento criado com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar seu agendamento. Tente novamente" });
  }
});

// Obter agendamentos do usuário logado
app.get("/agendamentos", authenticate, async (req, res) => {
  try {
    const agendamentos = await Agendamento.find({ userId: req.userId });
    res.json(agendamentos);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar agendamentos." });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const user = new User({ nome, email, senha });
    await user.save();
    res.status(201).send("Usuário cadastrado com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao cadastrar usuário.");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Usuário não encontrado" });

    const isMatch = password == user.senha;
    if (!isMatch) return res.status(400).json({ message: "Senha incorreta" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
