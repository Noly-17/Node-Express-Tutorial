import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js'

const app = express()
const PORT = 4000;
app.use(bodyParser.json())

app.use('/api', userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})