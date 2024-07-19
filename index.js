import express from 'express';
import configDotenv from 'dotenv';
const app = express()
configDotenv.config({ path: `${process.cwd()}/.env` });


app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'here'
    })
})
const PORT = process.env.APP_PORT || 4000

app.listen(PORT, () => {
    console.log('server running', PORT)
})