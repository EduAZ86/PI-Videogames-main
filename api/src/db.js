require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
//Aca importamos el modulo de ruta path y lo asignamos a una constante con el mismo nombre
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // el logging en false hace que no se muestren todas las consultas SQL en la consola
  native: false, // La opción “native” se establece en false para que Sequelize 
  //                sepa que se puede usar pg-native para obtener un rendimiento más rápido
});

// Aca se asigna a la constante basename el valor del basename del archivo actual
const basename = path.basename(__filename);

const modelDefiners = []; 

// Aca fs.readdirSync lee la carpeta /models y devuelve un array con los nombres de los archivos que encuentra
fs.readdirSync(path.join(__dirname, '/models'))

// Aca se filtran los archivos que no tienen extensión .js
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))

//Aca se agregan al array modelDefiners. Finalmente, se requieren los archivos de modelos y se agregan al array modelDefiners
  .forEach((file) => { modelDefiners.push(require(path.join(__dirname, '/models', file)))});

// Aca se ejecuta cada modelo en el array modelDefiners. Cada modelo es una función que recibe como parámetro el objeto sequelize
modelDefiners.forEach(model => model(sequelize));

// Aca se convierte el objeto sequelize.models en un array de pares clave-valor. Cada par es un array de dos elementos
let entries = Object.entries(sequelize.models);

// Aca se convierte cada clave en un string con la primera letra en mayúscula y la añade al valor correspondiente
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);

// Aca se convierte el array de pares clave-valor en un objeto y lo asigna a la propiedad models del objeto sequelize
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades

// Para relacionarlos hacemos un destructuring de los modelos que vamos a utilizar
const { Videogame, Genre } = sequelize.models;

// Aca vendrian las relaciones

Videogame.belongsToMany(Genre, { through: 'videogameGenre' })
Genre.belongsToMany(Videogame, { through: 'videogameGenre' })


// Product.hasMany(Reviews);

module.exports = { conn: sequelize, ...sequelize.models };
