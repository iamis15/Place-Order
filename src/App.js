import React from "react";
import MusicNote from "./images/icon-music.svg";
import Illustration from "./images/illustration-hero.svg";

export default function App() {
  return (
    <main className="card">
      <img className="hero" src={Illustration} alt="order-img" />
      <section className="summary">
        <h1>Order Summary</h1>
        <p className="info">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <section className="plan-card">
          <section className="container">
            <img src={MusicNote} alt="music-note-img" />
            <section>
              <h3>Annual Plan</h3>
              <h4>$59.99/year</h4>
            </section>
          </section>
          <p>Change</p>
        </section>
        <button className="paybtn">Proceed to Payment</button>
        <p className="cancelbtn">Cancel Order</p>
      </section>
    </main>
  );
}
