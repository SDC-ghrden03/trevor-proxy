const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

//middleware
app.use(morgan('dev'));

//serve up the react client
app.use(express.static('client'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//[[[[[[[[[[[[[[[[[[[[[ CAR CAROUSEL FROM API ROUTES ]]]]]]]]]]]]]]]]]]]]]

app.use('/cars', createProxyMiddleware({
  target: 'http://localhost:3001',
  changeOrgin: true
}))

//[[[[[[[[[[[[[[[[[[[[[ COST CALCULATOR FROM API ROUTES ]]]]]]]]]]]]]]]]]]]]]

app.use('/api/cars', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrgin: true
}))
app.use('/api/location', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrgin: true
}))
app.use('/api/crud', createProxyMiddleware({
  target: 'http://localhost:3002',
  changeOrgin: true
}))

//[[[[[[[[[[[[[[[[[[[[[ DETAIL SPECIFICATION FROM API ROUTES ]]]]]]]]]]]]]]]]]]]]]
//[[[[[[[[[[[[[[[[[[[[[ LANDING PAGE FROM API ROUTES ]]]]]]]]]]]]]]]]]]]]]

app.use('api/details', createProxyMiddleware({
  target: 'http://localhost:3004',
  changeOrgin: true
}))

//[[[[[[[[[[[[[[[[[[[[[ SIMILAR VEHICLES FROM API ROUTES ]]]]]]]]]]]]]]]]]]]]]

app.use('api/similar_vehicles', createProxyMiddleware({
  target: 'http://localhost:3005',
  changeOrgin: true
}))