const express = require('express')
const app = express()

const PORT = process.env.PORT || 2000;

app.get('/', (req, res) => {
    res.send('Servidor en linea ✅');
  })

app.listen(PORT, () => console.log(`Listening on port:${PORT}`))


