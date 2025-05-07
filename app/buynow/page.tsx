'use client';

import { useAppSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Load Stripe outside component to avoid recreating on every render
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Payment Form Component
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/success',
      },
    });

    if (error) {
      setMessage(error.message || 'An unexpected error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <button
        type="submit"
        className="bg-orange-600 text-white px-6 py-2 rounded-lg"
        disabled={!stripe}
      >
        Pay Now
      </button>
      {message && <p className="text-red-600 mt-2">{message}</p>}
    </form>
  );
};

const BuyNow = () => {
  const cart = useAppSelector((state) => state.counter.cart);
  const total = Object.values(cart).reduce(
    (acc: any, item: any) => acc + parseInt(item.price.replace(/[₹,]/g, '')) * item.quantity,
    0
  );

  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const createPaymentIntent = async () => {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: total }),
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    };

    if (total > 0) {
      createPaymentIntent();
    }
  }, [total]);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p>Loading payment intent...</p>
      )}
    </div>
  );
};

export default BuyNow;
