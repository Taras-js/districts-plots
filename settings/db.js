const mysql = require("mysql");
const response = require("../response");
const districtsJson = require("../data/districts.json");
const plotsJson = require("../data/plots.json");

const connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "districtsDB"
});
// connection.connect((error) => {
//   if (error) {
//     return console.log("Error connecting to database mySql");
//   } else {
//     // plotsJson.features.map(item => {
//     //   if(item.geometry.coordinates[1] !== undefined) {
//     //     const element = item.geometry.coordinates[0]
//     //     const element2 = item.geometry.coordinates[1]
//     //     const firstPolygon = element.flat(1).map(i => i.join(' '))
//     //     const twoPolygon = element2.flat(1).map(i => i.join(' '))
//     //     connection.query("INSERT INTO `geoplots`(`id`, `bbl`, `coord`, `shape_area`)  " +
//     //       "VALUES(NULL, '" +item.properties.bbl + "', " +
//     //       "ST_GeomFromText('MULTIPOLYGON(((" + firstPolygon + "),(" + twoPolygon + ")))',4326), 0)")
//     //     }
//     //       else if(item.geometry.coordinates.flat(2)[0] !== item.geometry.coordinates.flat(2)[item.geometry.coordinates.flat(2).length - 1])
//     //    {
//     //     let element = item.geometry.coordinates.flat(2)
//     //       const firstElement = item.geometry.coordinates.flat(2)[0]
//     //      element.push(firstElement)
//     //       const firstPolygon = element.map(i => i.join(' '))
//     //   connection.query("INSERT INTO `geoplots`(`id`, `bbl`, `coord`, `shape_area`)  " +
//     //         "VALUES(NULL, '" +item.properties.bbl + "', " +
//     //     "ST_GeomFromText('MULTIPOLYGON(((" + firstPolygon + ")))',4326), 0)")
//     //   }
//     //         })
//     // districtsJson.features.map(item => {
//     //   if(item.geometry.coordinates[1] !== undefined) {
//     //     const element = item.geometry.coordinates[0]
//     //     const element2 = item.geometry.coordinates[1]
//     //     const sql = "SELECT SUM(MBRContains(geodistricts.coordinates, geoplots.coord)) AS sum FROM geodistricts, geoplots WHERE id === geodistricts.id GROUP BY geodistricts.id";
//     //     const firstPolygon = element.flat(1).map(i => i.join(' '))
//     //     const twoPolygon = element2.flat(1).map(i => i.join(' '))
//     //     connection.query("INSERT INTO `geodistricts`(`id`, `ntacode`, `shape_area`, " +
//     //       "`county_fips`, `ntaname`, `shape_leng`, `boro_name`, `boro_code`, `coordinates`)  " +
//     //       "VALUES(NULL, '" + item.properties.ntacode + "'," +
//     //       "'" + item.properties.shape_area + "'," +
//     //       "'" + item.properties.county_fips + "'," +
//     //       "\'" + item.properties.ntaname.replace(/'/g) + "'\,  " +
//     //       "'" + item.properties.shape_leng + "'," +
//     //       "'" + item.properties.boro_name + "'," +
//     //       "'" + item.properties.boro_code + "'," +
//     // //       "(SELECT COUNT(*) FROM geodistricts  JOIN geoplots WHERE ST_Contains(geodistricts.coordinates, geoplots.coord))," +
//     //       "ST_GeomFromText('MULTIPOLYGON(((" + firstPolygon + "),(" + twoPolygon + ")))',4326))")
//     //     }
//     //       else if(item.geometry.coordinates.flat(2)[0] !== item.geometry.coordinates.flat(2)[item.geometry.coordinates.flat(2).length - 1])
//     //    {
//     //     let element = item.geometry.coordinates.flat(2)
//     //       const firstElement = item.geometry.coordinates.flat(2)[0]
//     //      element.push(firstElement)
//     // //      const sql = "SELECT SUM(MBRContains(geodistricts.coordinates, geoplots.coord)) AS sum FROM geodistricts, geoplots GROUP BY geodistricts.id";
//     // //
//     //      const firstPolygon = element.map(i => i.join(' '))
//     //      connection.query("INSERT INTO `geodistricts`(`id`, `ntacode`, `shape_area`, " +
//     //        "`county_fips`, `ntaname`, `shape_leng`, `boro_name`, `boro_code`, `coordinates`)  " +
//     //        "VALUES(NULL, '" + item.properties.ntacode + "'," +
//     //        "'" + item.properties.shape_area + "'," +
//     //        "'" + item.properties.county_fips + "'," +
//     //        "\'" + item.properties.ntaname.replace(/'/g) + "'\,  " +
//     //        "'" + item.properties.shape_leng + "'," +
//     //        "'" + item.properties.boro_name + "'," +
//     //        "'" + item.properties.boro_code + "'," +
//     // //        "(SELECT COUNT(*) FROM geodistricts  JOIN geoplots WHERE ST_Contains(geodistricts.coordinates, geoplots.coord))," +
//     //        "ST_GeomFromText('MULTIPOLYGON(((" + firstPolygon + ")))',4326))")
//     //    }
//     //         })
//
//     // districtsJson.features.map(item => {
//     //   connection.query("INSERT INTO `geodistricts`(`id`, `ntacode`, `shape_area`, " +
//     //     "`county_fips`, `ntaname`, `shape_leng`, `boro_name`, `boro_code`, `coordinates`, `plots`)  " +
//     //     "VALUES(NULL, '" + item.properties.ntacode + "'," +
//     //     "'" + item.properties.shape_area + "'," +
//     //     "'" + item.properties.county_fips + "'," +
//     //     "\'" + item.properties.ntaname.replace(/'/g) + "'\,  " +
//     //     "'" + item.properties.shape_leng + "'," +
//     //     "'" + item.properties.boro_name + "'," +
//     //     "'" + item.properties.boro_code + "'," +
//     // "SUM(ST_Contains(geodistricts.coordinates, geoplots.coord)) FROM geodistricts, geoplots" +
//     //     "ST_GeomFromText('POLYGON((" + item.geometry.coordinates.flat(2).map(i => i.join(' ')) + "))',4326))")
//     //   })
//
//     return console.log("Database connection was successful");
//   }
// });

module.exports = connection;

