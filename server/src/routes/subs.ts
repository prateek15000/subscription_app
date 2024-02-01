// import express from "express";
// import User from "../models/user";
//  import { checkAuth } from "../../middleware/checkAuth";
//  import {stripe } from "../utils/stripe";


//  const router = express.Router();

//  router.get("/prices", checkAuth,async(req,res)=>{
//     const prices = await stripe.prices.list({
//         apiKey: process.env.STRIPE_SECRET_KEY,
//     });
//     return res.json(prices);
//  });

//  export default router;


// import express from "express";
// // import User from "../models/user";
// // import Article from "../models/article";
// import { checkAuth } from "../../middleware/checkAuth";
// import stripe from "stripe";
// //import { Stripe } from "../utils/stripe";

// const router = express.Router();

// router.get("/prices", checkAuth, async (req, res) => {
//   const prices = await stripe.prices.list({
//     apiKey: process.env.STRIPE_SECRET_KEY,
//   });
  


//   return res.json(prices);
 
// });

// router.get("/prices", checkAuth, async (req, res) => {
//     const prices = await stripe.prices.list({
//       apiKey: process.env.STRIPE_SECRET_KEY,
//     });
  
//     return res.json(prices);
//   });
//export default router;

// import express from "express";
// import User from "../models/user";
// //import Article from "../models/article";
// //import Stripe from "stripe";
// import { checkAuth } from "../middleware/checkAuth";
// import { stripe } from "../utils/stripe";

// // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string,{
// //     apiVersion: "2023-10-16"
// // })

// const router = express.Router();

// router.get("/prices", checkAuth, async (req, res) => {
//   const prices = await stripe.prices.list({
//     apiKey: process.env.STRIPE_SECRET_KEY,
// //res.send("prices");
//   });

//   return res.json(prices);
//  });

// router.post("/session", checkAuth, async (req, res) => {
//   const user = await User.findOne({ email: req.user });

//   const session = await stripe.checkout.sessions.create(
//     {
//       mode: "subscription",
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price: req.body.priceId,
//           quantity: 1,
//         },
//       ],
//       success_url: "http://localhost:3000/articles",
//       cancel_url: "http://localhost:3000/article-plans",
//       customer: user.stripeCustomerId,
//     },
//     {
//       apiKey: process.env.STRIPE_SECRET_KEY,
//     }
//   );

//   return res.json(session);
// });

// export default router;

import express from "express";
import User from "../models/user";
import Article from "../models/article";
import { checkAuth } from "../middleware/checkAuth";
import { stripe } from "../utils/stripe";

const router = express.Router();

router.get("/prices", checkAuth, async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
});

router.post("/session", checkAuth, async (req, res) => {
  const user = await User.findOne({ email: req.user });

  Article.create({
    title:"Learn to travel  your self",
    imageUrl:
    "https://images.unsplash.com/photo-1706606991536-e39841f5f598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",

    content:
    "hey guys this is prateek mittal please foucs on your goals at the end no one heal and always stay motivated",
    access: "Standard",
  });




  const session = await stripe.checkout.sessions.create(
    {
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: req.body.priceId,
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/articles",
      cancel_url: "http://localhost:3000/article-plans",
      customer: user?.stripeCustomerId,
    },
    {
      apiKey: process.env.STRIPE_SECRET_KEY,
    }
  );

  return res.json(session);
});

export default router;