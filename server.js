require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const qs = require('qs');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/send-whatsapp', async (req, res) => {
  try {
    const {
      contact_phone,
      last_name,
      pnr,
      selected_flight_id,
      origin_iata,
      destination_iata,
      depart_date,
      return_date,
      cabin_class,
      pax_adults,
      pax_children,
      fare_family,
      total_fare
    } = req.body;

    const bodyMessage = `
Hello ${last_name}, ✈️
Your flight booking is confirmed with INYA AI AIRLINES.

PNR: ${pnr}
Flight: ${selected_flight_id}
Route: ${origin_iata} → ${destination_iata}
Departure Date: ${depart_date}
Return Date: ${return_date || ''}
Cabin Class: ${cabin_class}
Passengers: ${pax_adults} Adult(s), ${pax_children} Child(ren)
Fare Family: ${fare_family}
Total Fare: ₹${total_fare}

Thank you for choosing INYA AI AIRLINES! ✅
`;

    const payload = qs.stringify({
      To: `whatsapp:${contact_phone}`,
      From: `whatsapp:${process.env.TWILIO_WHATSAPP_FROM}`,
      Body: bodyMessage
    });

    const response = await axios.post(
      `https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`,
      payload,
      {
        auth: {
          username: process.env.TWILIO_ACCOUNT_SID,
          password: process.env.TWILIO_AUTH_TOKEN
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    res.json({
      success: true,
      twilio_response: response.data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.response ? error.response.data : error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`WhatsApp proxy server running on http://localhost:${PORT}`);
});
