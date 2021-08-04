const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://seriksk1:serik2402@cluster0.mcscg.mongodb.net/todo-app-db?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

module.exports = db;
