# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Flow

ccavenue
payU
razorpay
stripe

-- Poc On Sending

- Response back from iframe to application
- Gateways -- CCAvenue

1. Goal for POC
   -- Response back from iframe to application
   -- Integrating Different payment channels

2. Payment Gateway support - Razorpay & CCAvenue

3. Steps to Implement & Architecture.

4. Study Facade (Multiple Country / Multiple Pay. Gateway.)
   - encoded data to iframe

shopify payment gate
razorpay ,shopify code implement

send encoded code through iframe
Checks If already Submitted

Encoded data - User Info - Application Info - Gateway Detail - Initial Status

Payment Gateway Structure/Architecture

- gateways
  -- Multiple Payment Channels
  -- all exports
- gateway engine
  imports channels depending on requirement
- Redux
  Gateway ,User Info
  Payment Stages - Stage 1 - Created - Customer Detail Submitted - Stage 2 - authorized/failed - Stage 3 - Passed/Paid
- UI
  (receive encoded data as params through iframe) - Initial Loading && Check payment status
  --- Hydrate redux - user info , stage
  --- Check Through User info for already paid
  --- Send Response To Main application for already paid - Renders all Gateways required (data from params)
- Change Redux Stages And Update Response in Application

- Razorpay
  -- App sends a request to server to create Order. server turn call Razorpay to create an order/razorpay_order_ID. - and sends back to appli
  -- Razoprpay Steps - Fetch Payment Details/Authentication-Authorization/Capture pay
  -- send razorpay resp to server and main Appl
- Stripe

- CCAvenue
  -- get data from redux call webhook api
  -- response route to ccavenue
  -- on final submission redirect back to iframe with Updated Payment status
- Payu

  Pay Gateway
  redirect
  popup

Payment integration

then check status

Payment Module

Token Function with Parameter assign with types
styling param in token

// For Adding New Gateway

- Add In redux
- Add In Token Generator Typing
