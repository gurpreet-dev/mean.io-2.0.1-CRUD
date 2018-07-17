process.env.NODE_ENV= process.env.NODE_ENV || 'development'
process.env.SERVER_PORT= process.env.SERVER_PORT || '4040'
process.env.JWT_SECRET='0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
process.env.MONGO_HOST='mongodb://g4gpsingh:singh-8851@ds125881.mlab.com:25881/gp_mean1'
process.env.MONGO_PORT='35574'
require('babel-register');
require("babel-polyfill");
require('./server');
