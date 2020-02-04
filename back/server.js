const app = require('./src/services/express.service');
const db = require('./src/services/mongoose.service')
app.start();
db.connect();