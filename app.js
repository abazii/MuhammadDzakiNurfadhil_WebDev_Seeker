const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server Eco-Track berjalan dengan sukses!`);
    console.log(`Silakan buka browser dan akses: http://localhost:${PORT}`);
});
