const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./trainers.db");

const init = ()=>{
   db.run("CREATE TABLE if not exists Trainers(" +
   "nome TEXT NOT NULL PRIMARY KEY," +
   "idade INTEGER NOT NULL," +
   "cidade TEXT NOT NULL," +
   "email TEXT NOT NULL," +
   "senha TEXT NOT NULL " +
   ")")
}

module.exports = {
   init:init,
   db: db
}