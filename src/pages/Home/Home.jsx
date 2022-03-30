import "./Home.css";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <h1 className="title">PRICING AND PLANS</h1>
        <p className="homeP">
          Risk free, 30 days trial period, 30-day money back guarantee, no
          hidden fees
        </p>
        <div className="cardContainer">
          <Card title="STARTER" price={"9.99"} yearly={99} nbr={30} />
          <Card title="BUSINESS" price={"24.99"} yearly={249} nbr={100} />
        </div>
        <p className="homeP">
          <span className="blue">Contact us</span> if our online store operating
          more than 100 orders per months
        </p>

        <p className="largeFreeTrial">30-DAY FREE TRIAL</p>
        <p className="homeP">
          try the product absolutely free for the first month. No risk. No
          hidden fees. After that you will get a payment link inside product
          chat in application
        </p>

        <button className="sign">SIGN IN</button>
      </div>
      <Footer />
    </>
  );
}
