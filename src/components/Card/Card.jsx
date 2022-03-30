import "./Card.css";

export function Card({ title, price, yearly, nbr }) {
  let prettierPrice = price.split(".");

  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="cardPrice">
        <p className="price">
          <sup>$</sup>
          <span className="large">{prettierPrice[0]}</span>
          <sup>{prettierPrice[1]}</sup>
        </p>
        <p className="infoPrice">
          Billed monthly or ${yearly} per year via links in chat
        </p>
      </div>
      <div className="benefits">
        <p>
          <span className="check">✓</span> Up to{" "}
          <span className="nbr">{nbr}</span> orders per month
        </p>
        <p>
          <span className="check">✓</span> Orders notifications
        </p>
        <p>
          <span className="check">✓</span> Statistics data
        </p>
        <p>
          <span className="check">✓</span> Daily reports
        </p>
      </div>
    </div>
  );
}
