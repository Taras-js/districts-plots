const mysql = require("mysql");
const response = require("../response");
const districtsJson = require("../data/districts.json");
const plotsJson = require("../data/plots.json");
// console.log(districtsJson.features.map(item => item.properties.ntaname))
// console.log(plotsJson.features.map(item => {
//     return {
//         id: ++plotsJson.features.length,
//         bbl: item.properties.bbl,
//         geometry: item.geometry.coordinates.flat(3)
//     }}))

const connection = mysql.createConnection({
  host: "localhost",
  // socket: '/Applications/MAMP/tmp/mysql/mysql.sock',
  port: 3306,
  user: "root",
  password: "",
  database: "multipoligon",
  // multipoligon
  // districtsDB
});
connection.connect((error) => {
  if (error) {
    return console.log("Error connecting to database mySql");
  } else {
    // const sql = 'CREATE TABLE district(id INT, name VARCHAR(255), shape VARCHAR(20), geometry BIGINT(8000))'
    // connection.query(sql, async (error, rows, fields) => {
    //     if (error) {
    //         console.log( 'ошибка таблица не создана')
    //     } else {
    //         response.status('таблица создана')
    //     }
    // })
    // const sql = 'CREATE TABLE geo(id INT,  name VARCHAR(255), shape VARCHAR(20), geometry JSON)'
    // connection.query(sql, async (error, rows, fields) => {
    //     if (error) {
    //         console.log( 'ошибка таблица не создана')
    //     } else {
    //         response.status('таблица создана')
    //     }
    // })
    // const sql = 'CREATE TABLE plots(id INT,  bbl INT, geometry JSON)'
    // connection.query(sql, async (error, rows, fields) => {
    //     if (error) {
    //         console.log( 'ошибка таблица не создана')
    //     } else {
    //         response.status('таблица создана')
    //     }
    // })
    // districtsJson.features.map(item => {
    //     connection.query("INSERT INTO `geo`(`id`,`name`, `shape`, `geometry`)  VALUES('" +   --districtsJson.features.length + "', \'" + item.properties.ntaname.replace(/'/g) + "'\, '" + item.properties.shape_area + "','" + JSON.stringify(item.geometry.coordinates) + "')")
    // })
    // plotsJson.features.map(item => {
    //     connection.query("INSERT INTO `plots`(`id`,`bbl`, `geometry`)  VALUES('" +   --plotsJson.features.length + "', '" + item.properties.bbl + "','" + JSON.stringify(item.geometry.coordinates) + "')")
    // })
    const geoSql ='INSERT INTO geo(place_name, coordinates) VALUES (Apartment, PointFromText(POINT(49.234 2.5273))'
        connection.query(geoSql)




    return console.log("Database connection was successful");
  }
});

module.exports = connection;
