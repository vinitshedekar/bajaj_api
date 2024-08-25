const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const userId = "vinit_shedekar_04052003"; // Example user ID
const email = "vinitdhanaji.shedekar2021@vitstudent.ac.in"; // Example email
const rollNumber = "21BPS1259"; // Example roll number

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && item.length === 1);
    const highestLowercase = alphabets.filter(char => char === char.toLowerCase());
    const maxLowercase = highestLowercase.length > 0 ? [highestLowercase.reduce((a, b) => (a > b ? a : b))] : [];

    res.json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: maxLowercase
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
