const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./config/db.js');
const productRoutes = require('./routes/productroutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleWare');
app.use(express.json());
connectDb();
dotenv.config();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.send('Api is running')
})
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) =>
    res.send(process.env.PAYPAL_CLIENT_ID))
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT||5000;
app.listen(port,console.log(`Server running in ${process.env.NODE_ENV} on ${port}`))