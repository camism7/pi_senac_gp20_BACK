# Psychological Care Management App

# Projeto PI Senac GP20
Repositórios do frontend e backend do projeto PI Senac GP20.

## Descrição
O **Psychological Care Management App** é uma aplicação desenvolvida para facilitar o gerenciamento de atendimentos psicológicos. Desta forma, democratizando o acesso a serviços de saúde mental, como sessões de terapia e psicologia, oferecendo uma plataforma que simplifica o agendamento de atendimentos psicológicos e terapêuticos, promovendo a educação em saúde mental e incentivando o bem-estar integral dos usuários.

## Funcionalidades
- **Agendamento de Consultas:** Permite marcar, visualizar e gerenciar consultas.
- **Gerenciamento de Pacientes:** Armazena informações detalhadas dos pacientes, incluindo histórico de consultas e anotações.
- **Notificações e Lembretes**: Envia lembretes automáticos para consultas agendadas.
- **Relatórios e Análises**: Gera relatórios sobre o progresso dos pacientes e a eficácia dos tratamentos.
- **Segurança de Dados**: Utiliza criptografia para garantir a segurança e a privacidade das informações dos pacientes.

## Tecnologias Utilizadas
### Frontend
- React.js
- JavaScript
- CSS
- HTML

### Backend
- Node.js
- Express.js
- MongoDB (ou outro banco de dados utilizado)

## Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (caso esteja utilizando MongoDB localmente)

### Passo a Passo
#### Clonar os repositórios
1. **Clonar o repositório do frontend:**
   ```sh
   git clone https://github.com/camism7/pi_senac_gp20_FRONT.git
   ```
2. **Clonar o repositório do backend:**
   ```sh
   git clone https://github.com/camism7/pi_senac_gp20_BACK.git
   ```

#### Executar o Frontend
3. **Acessar o diretório do frontend:**
   ```sh
   cd pi_senac_gp20_FRONT
   ```
4. **Instalar as dependências:**
   ```sh
   npm install
   npm install react-router-dom axios bootstrap
   npm install jwt-decode
   ```
5. **Executar o frontend:**
   ```sh
   npm start
   ```
6. O frontend estará disponível em `http://localhost:3000/`.

#### Executar o Backend
7. **Acessar o diretório do backend:**
   ```sh
   cd ../pi_senac_gp20_BACK
   ```
8. **Instalar as dependências:**
   ```sh
   npm install express cors mongoose dotenv
   npm install nodemon --save-dev
   ```
9. **Configurar variáveis de ambiente:**
   - Criar um arquivo `.env` na raiz do backend e adicionar as configurações necessárias, por exemplo:
     ```env
     PORT=8080
     MONGO_URI=mongodb://localhost:27017/seu_banco
     JWT_SECRET=sua_chave_secreta
     ```
10. **Executar o backend:**
    ```sh
     npx nodemon server.js
    ```
11. O backend estará disponível em `http://localhost:8080/`.

## Conectando o Frontend com o Backend
Caso o backend esteja rodando em uma porta diferente, atualize as configurações do frontend para apontar corretamente para a API.
Baixe e utilize o MongoDB Compass para exibir uma interface gráfica que facilita a interação com o banco de dados.


## Projeto integrador feito por alunos do CENTRO UNIVERSITÁRIO SENAC:

**Integrantes do grupo:**

André Noronha Ribeiro

Camila Soler Marconi

Lohanne Tiffany de Carvalho

Milson Barbosa da Silva

Túlio Henrique de Araujo

## Projeto orientado por:

**Professor: Gustavo Calixto**
