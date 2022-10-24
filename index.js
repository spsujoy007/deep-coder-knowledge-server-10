const express = require(express);
const app = express()

const port = 5000;

app.get('/', (req, res) => {
    res.send("Hurraa! This code is running")
})

app.listen(port, () => {
    console.log(`Deep-coder-knowledge server is running at: ${port}`);
})