import dbconfig from "./dbConfig";
import mysql from "mysql2";

let connection = mysql.createPool(dbconfig);

export default connection;
