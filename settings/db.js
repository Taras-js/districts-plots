const mysql = require("mysql");
const response = require("../response");
const districtsJson = require("../data/districts.json");
const plotsJson = require("../data/plots.json");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "districtsDB"
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
    // const sql = 'ALTER TABLE geodistricts ADD countplots AS(SUM(ST_Contains(geodistricts.coordinates, geoplots.coord) FROM geodistricts, geoplots) )'
    // connection.query(sql)
    // districtsJson.features.map(item => {
    //     connection.query("INSERT INTO `geo`(`id`,`name`, `shape`, `geometry`)  VALUES('" +   --districtsJson.features.length + "', \'" + item.properties.ntaname.replace(/'/g) + "'\, '" + item.properties.shape_area + "','" + JSON.stringify(item.geometry.coordinates) + "')")
    // })
    // plotsJson.features.map(item => {
    //     connection.query("INSERT INTO `plots`(`id`,`bbl`, `geometry`)  VALUES('" +   --plotsJson.features.length + "', '" + item.properties.bbl + "','" + JSON.stringify(item.geometry.coordinates) + "')")
    // })
    // const geoSql ='INSERT INTO geo(place_name, coordinates) VALUES (Apartment, PointFromText(POINT(49.234 2.5273))'
    //     connection.query(geoSql)

    // const sql = 'CREATE TABLE geom (g GEOMETRY);'
    // connection.query(sql, async (error, rows, fields) => {
    //     if (error) {
    //         console.log( 'ошибка таблица не создана')
    //     } else {
    //         response.status('таблица создана')
    //     }
    // })
    // const sql = 'ALTER TABLE geodistricts ADD summa AS (SUM(MBRContains(geodistricts.coordinates, geoplots.coord)) FROM geodistricts, geoplots);'
    // connection.query(sql, async (error, rows, fields) => {
    //   if (error) {
    //     console.log( 'ошибка таблица не создана',error)
    //   } else {
    //     response.status('таблица создана')
    //   }
    // })
    //   const sql = 'ALTER TABLE geom ADD pol POLYGON;'
    // connection.query(sql, async (error, rows, fields) => {
    //   if (error) {
    //     console.log( 'ошибка таблица не создана')
    //   } else {
    //     response.status('таблица создана')
    //   }
    // })
    // const polygon = 'INSERT INTO `new`(`id`, `poligon`, `city`) VALUES (\'1\',ST_GeomFromText(\'POLYGON((-73.968461 40.757225,-73.968618 40.757004,-73.968685 40.757033,-73.968529 40.757254,-73.968461 40.757225))\'),\'saratov\')'
    // const point = "INSERT INTO `zip` (`id`,  `city`, `geo`) VALUES ('1', 'saratov',  ST_GeomFromText('POINT(-73.968461 40.757225)'))"
    // const dataPlots = "INSERT INTO `geoplots`(`id`, `bbl`, `coordinates`) VALUES (NULL,'" + item.properties.bbl + "','[value-3]')"

    //ПРАВИЛЬНО
    // plotsJson.features.map(item => {
    //   if(item.geometry.coordinates[1] !== undefined) {
    //     const element = item.geometry.coordinates[0]
    //     const element2 = item.geometry.coordinates[1]
    //     const firstPolygon = element.flat(1).map(i => i.join(' '))
    //     const twoPolygon = element2.flat(1).map(i => i.join(' '))
    //     connection.query("INSERT INTO `geoplots`(`id`, `bbl`, `coord`, `shape_area`)  " +
    //       "VALUES(NULL, '" +item.properties.bbl + "', " +
    //       "ST_GeomFromText('MULTIPOLYGON(((" + firstPolygon + "),(" + twoPolygon + ")))',4326), 0)")
    //     }
    //       else if(item.geometry.coordinates.flat(2)[0] !== item.geometry.coordinates.flat(2)[item.geometry.coordinates.flat(2).length - 1])
    //    {
    //     let element = item.geometry.coordinates.flat(2)
    //       const firstElement = item.geometry.coordinates.flat(2)[0]
    //      element.push(firstElement)
    //       const firstPolygon = element.map(i => i.join(' '))
    //   connection.query("INSERT INTO `geoplots`(`id`, `bbl`, `coord`, `shape_area`)  " +
    //         "VALUES(NULL, '" +item.properties.bbl + "', " +
    //     "ST_GeomFromText('MULTIPOLYGON(((" + firstPolygon + ")))',4326), 0)")
    //   }
    //         })

    //
    // districtsJson.features.map(item => {
    //   if(item.geometry.coordinates[1] !== undefined) {
    //     const element = item.geometry.coordinates[0]
    //     const element2 = item.geometry.coordinates[1]
    //     const sql = "SELECT SUM(MBRContains(geodistricts.coordinates, geoplots.coord)) AS sum FROM geodistricts, geoplots WHERE id === geodistricts.id GROUP BY geodistricts.id";
    //     const firstPolygon = element.flat(1).map(i => i.join(' '))
    //     const twoPolygon = element2.flat(1).map(i => i.join(' '))
    //     connection.query("INSERT INTO `geodistricts`(`id`, `ntacode`, `shape_area`, " +
    //       "`county_fips`, `ntaname`, `shape_leng`, `boro_name`, `boro_code`, `coordinates`)  " +
    //       "VALUES(NULL, '" + item.properties.ntacode + "'," +
    //       "'" + item.properties.shape_area + "'," +
    //       "'" + item.properties.county_fips + "'," +
    //       "\'" + item.properties.ntaname.replace(/'/g) + "'\,  " +
    //       "'" + item.properties.shape_leng + "'," +
    //       "'" + item.properties.boro_name + "'," +
    //       "'" + item.properties.boro_code + "'," +
    // //       "(SELECT COUNT(*) FROM geodistricts  JOIN geoplots WHERE ST_Contains(geodistricts.coordinates, geoplots.coord))," +
    //       "ST_GeomFromText('MULTIPOLYGON(((" + firstPolygon + "),(" + twoPolygon + ")))',4326))")
    //     }
    //       else if(item.geometry.coordinates.flat(2)[0] !== item.geometry.coordinates.flat(2)[item.geometry.coordinates.flat(2).length - 1])
    //    {
    //     let element = item.geometry.coordinates.flat(2)
    //       const firstElement = item.geometry.coordinates.flat(2)[0]
    //      element.push(firstElement)
    // //      const sql = "SELECT SUM(MBRContains(geodistricts.coordinates, geoplots.coord)) AS sum FROM geodistricts, geoplots GROUP BY geodistricts.id";
    // //
    //      const firstPolygon = element.map(i => i.join(' '))
    //      connection.query("INSERT INTO `geodistricts`(`id`, `ntacode`, `shape_area`, " +
    //        "`county_fips`, `ntaname`, `shape_leng`, `boro_name`, `boro_code`, `coordinates`)  " +
    //        "VALUES(NULL, '" + item.properties.ntacode + "'," +
    //        "'" + item.properties.shape_area + "'," +
    //        "'" + item.properties.county_fips + "'," +
    //        "\'" + item.properties.ntaname.replace(/'/g) + "'\,  " +
    //        "'" + item.properties.shape_leng + "'," +
    //        "'" + item.properties.boro_name + "'," +
    //        "'" + item.properties.boro_code + "'," +
    // //        "(SELECT COUNT(*) FROM geodistricts  JOIN geoplots WHERE ST_Contains(geodistricts.coordinates, geoplots.coord))," +
    //        "ST_GeomFromText('MULTIPOLYGON(((" + firstPolygon + ")))',4326))")
    //    }
    //         })

    // districtsJson.features.map(item => {
    //   connection.query("INSERT INTO `geodistricts`(`id`, `ntacode`, `shape_area`, " +
    //     "`county_fips`, `ntaname`, `shape_leng`, `boro_name`, `boro_code`, `coordinates`, `plots`)  " +
    //     "VALUES(NULL, '" + item.properties.ntacode + "'," +
    //     "'" + item.properties.shape_area + "'," +
    //     "'" + item.properties.county_fips + "'," +
    //     "\'" + item.properties.ntaname.replace(/'/g) + "'\,  " +
    //     "'" + item.properties.shape_leng + "'," +
    //     "'" + item.properties.boro_name + "'," +
    //     "'" + item.properties.boro_code + "'," +
    // "SUM(ST_Contains(geodistricts.coordinates, geoplots.coord)) FROM geodistricts, geoplots" +
    //     "ST_GeomFromText('POLYGON((" + item.geometry.coordinates.flat(2).map(i => i.join(' ')) + "))',4326))")
    //   })

    return console.log("Database connection was successful");
  }
});

module.exports = connection;

