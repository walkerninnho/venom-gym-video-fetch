require('dotenv').config()
const mongoose = require('mongoose')
const fs = require('fs')

const settimana = 'utenti';
const db_port = process.env.MONGODB_DATABASE_PORT;
// const url = `mongodb://localhost:${db_port}/${Collection}`;
const url = `mongodb://localhost:${db_port}/${settimana}`;

mongoose.connect(url);

