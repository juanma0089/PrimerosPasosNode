'use strict';

let stdin = process.stdin,
    stdout = process.stdout,
    person = {
        name : null,
        age : 0
    }

function saveAge(age) 
{
    person.age = age;

    if (person.age >= 18) 
    {
        stdout.write(person.name + ' es mayor de edad, tiene ' + person.age + ' años\n')    
    }else{
        stdout.write (person.name + ' es menor de edad, no tiene ' + person.age + ' años\n')
    }
}


function saveName(name) {

    person.name = name;

    let question = 'Hola ' + person.name + '¿Cuántos años tienes?'

    quiz(question, saveAge);
}

function quiz(question, callback) 
 {

    stdin.resume();
    stdout.write(question + ': ');

    stdin.once('data', function (res){
        callback( res.toString().trim() )
    });

}

stdin.setEncoding('utf8');
quiz('¿Cómo te llamas?', saveName);
