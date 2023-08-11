const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

const app = express();
app.use(bodyParser.json());

app.post('/api/subscribe', async (req, res) => {
    const { plan } = req.body;
    
    try {
        const customer = await stripe.customers.create({
            // Create a customer in Stripe (you might want to store customer info in your DB too)
        });
        
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: 'YOUR_STRIPE_PLAN_ID_FOR_' + plan.toUpperCase() }],
        });
        
        // Store subscription details in your database
        
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
