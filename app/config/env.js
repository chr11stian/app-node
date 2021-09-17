const env = {
  database: 'dfkkh5snbjd3r6',
  username: 'tlifzbmmkirzzv',
  password: '2b31a535cb604a4ce850e95684e9b79158a305eb6f62dd7524cf264cc596766b',
  host: 'ec2-34-227-120-94.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  },
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;