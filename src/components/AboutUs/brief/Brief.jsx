import Screen2Image from "../../../assets/briefIMG.png";
import "./brief.css";

const Brief = () => {
  return (
    <section className="about-brief">
      <div className="a-b-content">
        <h1>About us</h1>
        <p className="text-4xl max-[400px]:text-2xl leading-[2.7rem] text-orange-950 font-bold">
          Introducing the epitome of opulence and sophistication, The Gng
          builders is a trusted builder based in the tricity vicinity
          (Chandigarh, Panchkula, Mohali). A meticulous crafter of your dreams
          to begin with your new chapter of life. A masterpiece of intellectual
          brilliance reflected through our Architectures. Elevating the concept
          of lavish living, as a building is not just an architecture but a
          sanctuary of indulgence. Beyond the architectural marvels the GNG
          group offers a celebration of lifestyle with aminities
          redefining luxury.With a commitment to quality, customer satisfaction,
          and sustainable practices, we strive to deliver projects that
          harmonize functionality, aesthetics, and comfort.
          Our unique projects,
          like Alianza, boast excellent street visibility and a prime location,
          surrounded by greenery, natural light, and stunning views. With great
          connectivity and the ability to attract talent from across the city.
        </p>
      </div>
      <div className="brief-img-container">
        <img src={Screen2Image} alt="Commercial project in zirakpur"/>
      </div>
    </section>
  );
};

export default Brief;
