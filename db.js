import 'dotenv/config'
import mysql from "mysql";

export const connection = mysql.createConnection({
	host:process.env.URL,
	user:'root',
	password:process.env.PASSWORD,
	database:process.env.DB,
});