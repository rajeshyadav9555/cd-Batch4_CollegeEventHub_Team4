require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 4000;

async function start(){
  try{
    await sequelize.sync(); // sync models; in prod use migrations
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }catch(err){
    console.error('Failed to start server:', err);
  }
}

start();
