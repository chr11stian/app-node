const env = {
  database: 'd5kl0fb9aca7sh',
  username: 'llmamszamisria',
  password: '6f710370bfd44173d14618ad3caffa20de533be6752ff34522a9d0569ebc926f',
  host: 'ec2-54-205-232-84.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;