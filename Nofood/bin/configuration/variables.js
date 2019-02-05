const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:nofood123456@ds119772.mlab.com:19772/nofood'
    },
    Security: {
        secretyKey: 'd41d8cd98f00b204e9800998ecf8427e|164feaf76ea321e06573f3a1630cf8b7'
    }
}
module.exports = variables;