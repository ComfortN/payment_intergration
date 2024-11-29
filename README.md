# Jewelry E-Commerce Mobile App

## Overview
This is a React Native mobile application for an online jewelry store, featuring product browsing, checkout, and payment integration using Paystack.

## Features
- Product listing with grid view
- Detailed product information
- Checkout process
- Secure payment integration with Paystack

## Prerequisites
- Node.js
- npm
- Expo CLI
- React Native development environment

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/ComfortN/payment_intergration.git
cd payment_intergration
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Required Packages
```bash
expo install react-native-paystack-webview @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-safe-area-context react-native-screens
```


## Configuration

### Payment Gateway
This app uses Paystack for payment processing. 

#### Paystack Configuration
1. Create a Paystack account at [Paystack](https://paystack.com/)
2. Obtain your test/live API keys from the Paystack dashboard
3. Replace the `paystackKey` in `PaymentScreen.js` with your actual key

```javascript
<Paystack  
  paystackKey="YOUR_ACTUAL_PAYSTACK_KEY"
  // other configurations...
/>
```

## Available Scripts

### Start the Application
```bash
expo start
```

### Run on iOS Simulator
```bash
expo start --ios
```

### Run on Android Emulator
```bash
expo start --android
```

## Payment Integration Details

### Payment Flow
1. User selects a product on the Product Screen
2. Navigates to Checkout Screen with product details
3. Initiates payment through Paystack WebView
4. Handles payment success/failure scenarios

### Payment Event Handlers
- `handlePaymentSuccess()`: Triggered on successful payment
  - Displays success alert
  - Navigates back to Product Screen
- `handlePaymentCancel()`: Triggered on payment cancellation
  - Displays cancellation alert
  - Returns to Checkout Screen

## Security Considerations
- Uses Paystack for secure payment processing
- Tokenizes payment information
- Handles payment events securely

## Testing
- Use Paystack test cards for sandbox testing
- Verify payment flows in different scenarios

## Troubleshooting
- Ensure all dependencies are correctly installed
- Check Paystack API key configuration
- Verify network connectivity during payment
