const express = require('express');
const { clearScreenDown } = require('readline');

const app = express()

app.listen(5000, console.log('Server running on port 5000'))