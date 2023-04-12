const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myProject';
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to mongodb');
    const mySchema = new mongoose.Schema({ name: String, age: Number });
    const MyModel = mongoose.model('myCollection', mySchema);
    MyModel.find({}, (err, docs) => {
        if (err) throw err;
        console.log(docs);
        mongoose.connection.close();
    });
});
