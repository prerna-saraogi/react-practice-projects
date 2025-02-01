import React, { useState } from "react";
import "./PricingCard.css";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const pricingOptions = [
  {
    tier: "Basic",
    price: "$60",
    description:
      "Up to 50 creative & professional  icons + one color versions/themes",
    features: [true, false],
  },
  {
    tier: "Standard",
    price: "$120",
    description:
      "Up to 100 creative & professional  icons + two color versions/themes per month",
    features: [true, true],
  },
  {
    tier: "Premium",
    price: "$180",
    description:
      "Up to 200 creative & professional  icons + four color versions/themes",
    features: [true, true],
  },
];

export default function PricingCard() {
  const [selectedTier, setSelectedTier] = useState("Standard");
  const [addedTier, setAddedTier] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    setAddedTier(selectedTier);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  return (
    <div className="pricing-container">
      <div className="pricing-card">
        <div className="pricing-tiers">
          <div className="toggle-buttons">
            {pricingOptions.map((option) => (
              <button
                key={option.tier}
                className={selectedTier === option.tier ? "active" : ""}
                onClick={() => setSelectedTier(option.tier)}
              >
                {option.tier}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing-content">
          {pricingOptions.map(
            (option) =>
              selectedTier === option.tier && (
                <div key={option.tier}>
                  <h2 className="plan-title">{option.tier}</h2>
                  <div className="plan-set">
                    <p>Icon Sets</p>
                    <p className="plan-price">{option.price}</p>
                  </div>
                  <p className="plan-details">{option.description}</p>
                  <ul>
                    <li>
                      {option.features[0] ? (
                        <FaCheck className="check" />
                      ) : (
                        <IoClose className="uncheck" />
                      )}{" "}
                      Included source files
                    </li>
                    <li>
                      {option.features[1] ? (
                        <FaCheck className="check" />
                      ) : (
                        <IoClose className="uncheck" />
                      )}{" "}
                      Converted to responsive components
                    </li>
                  </ul>
                </div>
              )
          )}
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to cart
        </button>
        {showMessage && (
          <div className="confirmation">{addedTier} plan added to cart!</div>
        )}
      </div>
    </div>
  );
}
