¿Cómo Instalar y Usar el Sistema?
- Se utilizaron las siguientes aplicaciones:
●	Visual Studio Code.
●	Node.js.
●	Google Chrome.
●	Plantilla ejs.
●	XAMPP.

- En la terminal de Visual Studio Code se instaló:
●	Express-generator.
●	Express.
●	NPM.
●	Mysql.
●	Jsonwebtoken
●	Bcrypt
●	Dotenv
●	Knex
●	Cookie Parser

- Por último, se instaló la siguiente extensión del Visual Studio Code:
●	Thunder Client.


Instalación del Sistema
- Para el uso del sistema, simplemente seguimos los siguientes pasos:
1- Abrimos o arrastramos la carpeta que contiene los archivos del sistema dentro del Visual Studio Code.
2.- Instalar las dependencias antes mencionadas o que se visualizan en el archivo package.json para el correcto funcionamiento del mismo. A su vez, instalar el XAMPP en el computador y la extensión Thunder Client en el VSC.
3- Dentro del XAMPP, arrancar las opciones de MySQL (Base de datos) y Apache (servidor).
4- Importar la base de datos de nuestro programa, con knex usando npx knex migrate:latest (en la consola), y en el archivo knexfile.js colocar la información de la base de datos que se quiera usar.
5- Dentro del VSC abrimos la terminal con Ctrl + j, y escribimos: npm install bcrypt,
npm install cookie-parser, npm install jsonwebtoken, npm install knex, npm install mysql, npm install ejs, npm install dotenv, npm install express con esto ya estarían instaladas nuestras dependencias.
6- Si todo funciona correctamente; podemos comenzar a trabajar las funciones de nuestro código con npm start
