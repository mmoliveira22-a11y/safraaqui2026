const axios = require('axios');

async function testBackend() {
    try {
        console.log('Testing Backend Connectivity...');
        const response = await axios.get('http://localhost:3001/');
        console.log('Main Route:', response.data);

        // Test Payment Route (Mock)
        // const payment = await axios.post('http://localhost:3001/create-checkout-session');
        // console.log('Payment Session:', payment.data);

        console.log('Backend seems to be running!');
    } catch (error) {
        console.error('Error connecting to backend:', error.message);
    }
}

testBackend();
