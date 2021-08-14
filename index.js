const express = require('express');

const app = express();

app.use(express.json());

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));