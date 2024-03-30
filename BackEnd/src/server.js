const app = require('./app');
require('dotenv');
console.log(process.env.PORT)

const port = process.env.PORT || 8888;

app.listen(port, () => console.log(`Server is running, on port ${port}`));