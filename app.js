import express from "express";
import Router from "./router.js";
import connection from "./connection.js";
import path from 'path';

const app = express();
const port = 3001;

app.use(express.static('frontend'));  
app.use(express.json({limit:"50mb"}));
app.use('/api', Router);

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('frontend/pages/index.html'));  
// });

connection().then(() => {
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(error);
});
