/* Conexion base de datos */ 

const mysql = require("mysql");

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Mila081316',
    database:'gespro' 
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('¡Conectado a la db gespro del proyecto!');
})

module.exports=conexion