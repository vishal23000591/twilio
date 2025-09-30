# 💬 INYA AI AIRLINES – WhatsApp Notification Integration

This project integrates **Twilio WhatsApp API** with INYA AI AIRLINES.

Every flight booking, cancellation, or status update is **automatically sent to passengers via WhatsApp** with full booking details.

Deployed on Render: [https://twilio-6cjw.onrender.com](https://twilio-6cjw.onrender.com)

---

##  Features

* Send WhatsApp notifications for:

  * Flight booking confirmation
  * Booking cancellation with refund
  * Booking status updates
* Personalized messages with passenger details, PNR, flight info, and fare
* Logs messages in console for tracking
* Easy setup using `.env` for Twilio credentials

---

## 📂 Project Structure

```
server.js       # Sends WhatsApp messages for booking, cancellation, and status updates
.env            # Twilio account SID, Auth Token, WhatsApp number, and other credentials
```

---

##  WhatsApp Message Flow Examples

### 1️⃣ Booking Confirmation

**Trigger:** When a passenger books a flight

**Message Example**

```
Hello Sharma, ✈️
Your flight booking is confirmed with INYA AI AIRLINES.

PNR: INYA1234
Flight: IA123
Route: DEL → BLR
Departure Date: 2025-10-30
Return Date: 2025-11-05
Cabin Class: Economy
Passengers: 2 Adult(s), 1 Child(ren)
Fare Family: Saver
Total Fare: ₹15000

Thank you for choosing INYA AI AIRLINES! ✅
```

---

### 2️⃣ Booking Status Update

**Trigger:** When a passenger checks booking status

**Message Example**

```
Hello Sharma, ✈️
Here is your booking status with INYA AI AIRLINES:

PNR: INYA1234
Flight: IA123
Route: DEL → BLR
Departure Date: 2025-10-30
Return Date: 2025-11-05
Cabin Class: Economy
Passengers: 2 Adult(s), 1 Child(ren)
Fare Family: Saver
Status: Scheduled

Thank you for choosing INYA AI AIRLINES! ✅
```

---

### 3️⃣ Booking Cancellation

**Trigger:** When a passenger cancels a booking

**Message Example**

```
Hello Sharma, ✈️
Your booking with INYA AI AIRLINES has been cancelled.

PNR: INYA1234
Flight: IA123
Route: DEL → BLR
Departure Date: 2025-10-30
Return Date: 2025-11-05
Cabin Class: Economy
Passengers: 2 Adult(s), 1 Child(ren)
Fare Family: Saver
Refund Amount: ₹12000
Cancellation Fee: ₹3000

Thank you for using INYA AI AIRLINES! ✅
```

---

##  Tech Stack

* Node.js with Express.js
* Twilio WhatsApp API for notifications
* Integrated with INYA AI AIRLINES booking system
* Deployed on Render

---

##  Future Enhancements

* Automated reminders for flight timings
* Include meal preferences and baggage info in WhatsApp messages
* Store WhatsApp message history in MongoDB
* Support multi-language notifications

---

##  Author

Built by Vishal (Pixel Pirates Team) for INYA AI AIRLINES 

---
