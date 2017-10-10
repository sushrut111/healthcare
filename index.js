'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Path = require('path');
var request = require('request');
const http  = require('http');
const server = new Hapi.Server();
server.connection({ port: 3000, host: '0.0.0.0' });

const dbOpts = {
    url: 'mongodb://localhost:27017/test',
    settings: {
        poolSize: 10
    },
    decorate: true
};

server.state('session', {
    ttl: null,
    isSecure: false,
    isHttpOnly: true,
    encoding: 'base64json',
    clearInvalid: false, // remove invalid cookies
    strictHeader: true // don't allow violations of RFC 6265
});
server.register(require('vision'), (err) => {

    //Hoek.assert(!err, err);

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'public/templates',
        layout: true,
        layoutPath: Path.join(__dirname, 'public/templates/layout')
        // layoutPath: './public/layout',
        //helpersPath: './public/materialize/js'
    });
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});
server.register([{
    register: require('inert'),
    options: {}
}, {
    register: require('hapi-mongodb'),
    options: dbOpts
}], (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/login',
        handler: function (request, reply) {
            // reply("iuhjnljk");
            if(!request.state.session) reply.view('login',null,{ layout: 'loginlay' });
            else if(request.state.session.isloggedin==true) reply().redirect('/accept');
             else reply.view('login',null,{ layout: 'loginlay' });
        }
    });
    server.route({
        method: 'GET',
        path: '/accept',
        handler: function(request,reply){
            console.log(request.state.session);
            if(!request.state.session) reply("log in first").redirect("/login");

            else{
                const db = request.mongo.db;

                    db.collection('users').aggregate([
                    { $lookup:
                        {    
                        from: 'doctors',
                        localField: 'doctor',
                        foreignField: 'id',
                        as: 'doctor'
                        }
                    }          
                    ], function(err, result) {
                    if (err) throw err;
                    result = result[0];
                reply.view('dashboard',{name :result.name,email:result.email,gender:result.gender,doctor:result.doctor[0]});
                // result = JSON.parse(result);
                // console.log(result[0].name);
                // reply(result[0]);
                });



            // db.collection('users').findOne({'username':request.state.session.user}, function (err, result) {
            //     console.log(result);
            //     reply.view('dashboard',{name :result.name,email:result.email,gender:result.gender});
                 
            // });




            }
        }
    });
    server.route({
        method: 'GET',
        path: '/testi',
        handler: function (request, reply) {
            reply.view('insert');
    }
    });
    server.route({
        method: 'GET',
        path: '/testing',
        handler: function (request, reply) {
            reply.view('plots');
    }
    });

    server.route({
        method: 'POST',
        path: '/insert',
        handler: function (request, reply) {
            var name = request.payload.name;
            var lab = request.payload.lab;
            var expt = request.payload.number;
            var wiki = request.payload.wiki;
            const db = request.mongo.db;
            db.collection('labsdata').insert({lab:lab,expt:expt,name:name,wiki:wiki});
            reply.redirect("/testi");
    }
    });

    server.route({
        method: 'POST',
        path: '/register',
        handler: function (request, reply) {
            var name = request.payload.fname + request.payload.lname;
            var phone = request.payload.phone;
            var age = request.payload.age;
            var email = request.payload.email;
            var gender = request.payload.gender;
            var username = request.payload.username;
            var password = request.payload.password;
                const db = request.mongo.db;
            var exist = 0;
            
            if(!(name&&phone&&age&&email&&gender&&username&&password)){
                reply.view('login',{message:"incomplete"},{layout:"loginlay"});
            }
            else if(username){
                db.collection('users').findOne({'username':username}, function (err, result) {
                if(result) exist = 1; 

            if(exist==1) 
                reply.view('login',{message:"exists"},{layout:"loginlay"});

            else{
            db.collection('users').insert({email:email,phone:phone,age:age,email:email,gender:gender,name:name,username:username,password:password});
            reply.view('login',{message:"success"},{layout:"loginlay"});

            }    


            });

 
            }

        }
    });
    server.route({
        method: 'GET',
        path: '/history',
        handler: function (request, reply) {


            if(!request.state.session) reply("log in first").redirect("/login");

            else{
                const db = request.mongo.db;

                    db.collection('users').aggregate([
                    { $lookup:
                        {    
                        from: 'doctors',
                        localField: 'doctor',
                        foreignField: 'id',
                        as: 'doctor'
                        }
                    }          
                    ], function(err, result) {
                    if (err) throw err;
                    result = result[0];
                reply.view('plots',{name :result.name,email:result.email,gender:result.gender,doctor:result.doctor[0]});
                // result = JSON.parse(result);
                // console.log(result[0].name);
                // reply(result[0]);
                });



            // db.collection('users').findOne({'username':request.state.session.user}, function (err, result) {
            //     console.log(result);
            //     reply.view('dashboard',{name :result.name,email:result.email,gender:result.gender});
                 
            // });




            }

}

    });
    server.route({
        method: 'POST',
        path: '/doctor',
        handler: function (request, reply) {
            if(!request.state.session) reply("log in first").redirect("/login");
            else
            {
            var doctor = request.payload.doctor;
            const db = request.mongo.db;
            db.collection('users').update({username:request.state.session.user},{$set:{'doctor':doctor}});
            reply.redirect("/doctor");

            }
    }
    });


    server.route({
        method:'GET',
        path:'/doctor',
        handler: function(request,reply) {
            if(!request.state.session) reply("log in first").redirect("/login");

            else{
                console.log("**************************************************************");
                // console.log(request.payload);
                const db = request.mongo.db;
                console.log(request.payload==null);
                if(request.payload!=null && request.payload.doctor){
                    db.collection('users').update({'username':request.state.user},{$set:{'doctor':request.payload.doctor}});        
                }
                


                db.collection('users').findOne({'username':request.state.session.user}, function (err, result) {
                if(!result.doctor)
                {
                    // reply("no doc");
                   reply.view('adddoctor',{name :result.name,email:result.email,gender:result.gender});
                }
                else {
                // reply("here");
                    db.collection('users').aggregate([
                    { $lookup:
                        {    
                        from: 'doctors',
                        localField: 'doctor',
                        foreignField: 'id',
                        as: 'doctor'
                        }
                    }          
                    ], function(err, result) {
                    if (err) throw err;
                    result = result[0];
                reply.view('doctor',{name :result.name,phone:result.phone,email:result.email,gender:result.gender,doctor:result.doctor[0]});
                // result = JSON.parse(result);
                // console.log(result[0].name);
                // reply(result[0]);
                });
                }
            });




            }
        }
    });
    server.route({
        method: 'GET',
        path: '/fetchdoctors',
        handler: function(request,reply){
            const db = request.mongo.db;
            db.collection('doctors').find().toArray(function(err, items) {
                 console.log(items);
                 reply(items);
             });
        }
    });
    //http://bulk.rocktwosms.com/spanelv2/api.php?username=nitwarangal&password=NITWARANGAL2020&to=".$phoneno."&from=TMWSDC&message=HI THERE
    server.route({
        method: 'GET',
        path: '/ambulance',
        handler: function(request,reply){
            var name = request.params.name;
            var phone = request.params.phone;
            http.get({
  hostname: 'bulk.rocktwosms.com',
  path: '/spanelv2/api.php?username=nitwarangal&password=NITWARANGAL2020&to='+9403039900+'&from=SSNITW&message=ambulance_for_'+name+'_urgently.',
  agent: false  // create a new agent just for this one request
}, (res) => {
  reply(res);
});
        }
    });

    server.route({
        method: 'GET',
        path: '/logout',
        handler: function(request,reply){
            if(!request.state.session.isloggedin) reply("log in first").redirect("/login");
            reply().unstate('session').redirect('/login');
        }
    });
    server.route({
        method: '*',
        path: '/auth',
        handler: function (request, reply) {
            //reply('Hello, ' + encodeURIComponent(request.payload.username) + encodeURIComponent(request.payload.password)+'!');
            const db = request.mongo.db;
            const ObjectID = request.mongo.ObjectID;
            db.collection('users').findOne({'username':request.payload.username}, function (err, result) {
 
            //     if (err) {
            //         return reply(Boom.internal('Internal MongoDB error', err));
            //     }
                // console.log(result.username+" "+result.password);
                if(result&&result.password==request.payload.password){
                    reply("Please wait").state('session', { 'user':request.payload.username,'isloggedin':true, 'name':result.name }).redirect('/accept');
                    // console.log(request.state.session);
                }
                else{
                    reply("Please wait").redirect('/reject');
                }
            });
            // db.collection('users').insert( { username: request.payload.username, password:request.payload.password } );
            // reply("chu");
        }


    });

    server.route({
        method: 'GET',
        path: '/materialize',
        handler: function (request, reply) {
            reply.file('./public/materialize/css/materialize.min.css');
        }
    });
    server.route({
        method: 'GET',
        path: '/jquery',
        handler: function (request, reply) {
            reply.file('./public/materialize/js/jquery-3.2.1.min.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/materializejs',
        handler: function (request, reply) {
            reply.file('./public/materialize/js/materialize.min.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/js/{jslink}',
        handler: function (request, reply) {
            reply.file('./public/materialize/js/'+request.params.jslink);
        }
    });

    server.route({
        method: 'GET',
        path: '/images/{img}',
        handler: function (request, reply) {
            reply.file('./public/images/'+request.params.img);
        }
    });
});
server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + ' your browser: '+request.headers['user-agent']);
        // reply.view('testblue');
    }
});
server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});




