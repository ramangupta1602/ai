const express = require('express')
const cors= require('cors')
require('dotenv').config();

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
  params: {
    query: '1lb brisket with fries'
  },
  headers: {
    'X-RapidAPI-Key': 'f72da8057bmsha06d6e87804774bp14e9e5jsn6f46f7353784',
    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response =  axios.request(options);
	console.log(response.data,"response");
} catch (error) {
	console.error(error,"error");
}
const port = 8000;

const app= express();
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`Examples listening at http://localhost:${port}`)
})