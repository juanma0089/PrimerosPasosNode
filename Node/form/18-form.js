'use strict';

let http = require('http').createServer(webServer),
    form = require('fs').readFileSync('form.html'),
    querystring = require('querystring'),
    util = require('util'),
    dataString = '';

function webServer(req, res){
    
if(req.method == 'GET'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(form)
    //es lo que enviará al navegador web
}
if(req.method == 'POST'){
    req.
        on('data', function(data){
//?Mientras haya datos, ejecutaremos la siguiente CALLBACK
            dataString += data
//?que concatenará el dato en lña vriable dataString            
        })
        .on('end', function(){
//?Cuando terminen los datos, ejecutaremos la siguiente callback
//?declaramos una variable de texto
//?texto concatenado con el valor de la variable (dataString)

            // let templateString = `Los datos que enviaste por POST como string son: ${dataString}`
            // console.log(templateString)//mostramos en terminal
            // res.end(templateString)//enviamos al navegador
            
            let dataObject = querystring.parse(dataString), 
            //Obtenemos un objeto con querystring.parse
             dataJSON = util.inspect(dataObject),
//?inspect devuelve una cadena de texto de un objeto
//?declaramos una variable de texto

             templateString = `Los datos que enviaste por POST como string son: ${dataString}
                                Los datos que enviastes por POST como JSON son: ${dataJSON}`
            console.log(templateString)//?mostramos en terminal
            res.end(templateString)//?enviamos al navegador
        })
    }
}

http.listen(3000);

console.log("Servidor corriendo en http://localhost:3000/");