
# DevStage App

This is a [React](https://react.dev/) project built with [Next.js](https://nextjs.org).

I've built during the NLW Connect: an awesome event by [RocketSeat](https://www.rocketseat.com.br/)

The main objective of this app is to understand how some React components work and to create a complete App from scratch.

I've also integrated the app with a [Node.js API](https://github.com/AndreiPrado/nlw-connect-nodejs)

## This is how the app works:
- On the main screen, you will see the event description and a form.
- This form is responsible for confirming the user's subscription to the event.
- Once the user subscribes, the page is redirected to the subscription confirmation, and the user has the option to share their link with other users.
- Every click on the generated link will be counted towards the user's subscription.
- For each user who subscribes through the referral link, the user will earn a point.
- The final page shows the Referrals Ranking.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed using Vercel

[This](https://nlw-connect-gray.vercel.app/) is the actual public URL of the app. Please take a look at the project in action.
