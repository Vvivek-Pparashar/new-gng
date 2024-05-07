import React from "react";
import sn1 from "../../assets/ALIANZA.png";
import sn2 from "../../assets/Eat.png";
import sn3 from "../../assets/Shop.png";
import sn4 from "../../assets/Grow.png";
import "./EatShopGrow.css";

const EatShopGrow = () => {
  return (
    <div className="esg">
      <img
        src={sn1}
        alt="Real estate investment
"
      />
      <div className="esg1">
        <div className="esg1r">
          <img
            src={sn2}
            alt="Real estate investment
"
          />
        </div>
        <div className="esg1l">
          <h1>Eat</h1>
          <p>
            “Good food brings people together” At Alianza, our vibrant and
            diverse culinary scene offers something for every taste bud. From
            local delicacies to international flavors, our carefully curated
            selection of restaurants and cafes will satisfy your cravings. From
            a quick bite or a leisurely dining experience, Alianza has it all.
          </p>
        </div>
      </div>

      <div className="esg1 esgcr">
        <div className="esg1l">
          <h1>Shop</h1>
          <p>
            Discover a world of retail therapy at Alianza. Our thoughtfully
            designed shopping spaces showcase a wide range of brands, from
            high-end fashion to local artisans. Alianza is designed specifically
            to cater all your shopping needs.
          </p>
        </div>
        <div className="esg2r">
          <img
            src={sn3}
            alt="Real estate investment
"
          />
        </div>
      </div>

      <div className="esg1">
        <div className="esg3r">
          <img
            src={sn4}
            alt="Real estate investment
"
          />
        </div>
        <div className="esg1l">
          <h1>Grow</h1>
          <p>
            At Alianza, we believe in nurturing dreams and fostering growth. Our
            innovative co-working spaces and business incubators provide a
            supportive environment for entrepreneurs and startups to thrive.
            Alianza offers the perfect ecosystem to grow and succeed. Join us
            and be a part of the next generation of trailblazers!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default EatShopGrow;
