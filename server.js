var Hapi = require('hapi'),
    Path = require('path');

var server = new Hapi.Server({
    connections: {
        router: {
            isCaseSensitive: false,
            stripTrailingSlash: true
        },
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            },
            validate: {
                options: {
                    allowUnknown: true
                }
            }
        }
    }
});

server.connection({
    host: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port: process.env.OPENSHIFT_NODEJS_PORT || 3000
});

server.views({
    engines: {
        jade: {
            module: require('jade')
        }
    },
    context: {},
    path: __dirname + '/src/views',
    layoutPath: __dirname + '/src/views/layout'
});

server.route({
    method: 'GET',
    path:'/',
    handler: function (request, reply) {
        reply.view('index');
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});