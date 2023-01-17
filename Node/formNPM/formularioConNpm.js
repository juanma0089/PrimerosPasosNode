'use strict'

let forms = require('forms');
let fields = forms.fields;
let validators = forms.validators;
 
let reg_form = forms.create({
    username: fields.string({ required: true }),
    password: fields.password({ required: validators.required('You definitely want a password') }),
    confirm:  fields.password({
        required: validators.required('don\'t you know your own password?'),
        validators: [validators.matchField('password')]
    }),
    email: fields.email()
});

let html = reg_form.toHTML();

console.log(html);


function webServer(req, res)
{
    function readFile(err, html)
    {
        if(err) throw err
        res.end();
    }

    res.writeHead(200, {'Content-Type':'text/html'});
    
}

http.listen(3000);

console.log('Servidor corriendo en http://localhost:3000/');