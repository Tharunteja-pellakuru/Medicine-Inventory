import Pharmacist from "../assets/Pharmacist.jpeg";

const AboutUs = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Life Care Pharma.</h2>
        <p className="about-text">
          At Life Care Medicals, we are dedicated to providing top-quality
          medical products and healthcare solutions. With a commitment to
          excellence and customer satisfaction, we ensure that our products meet
          the highest standards of safety and efficacy.
        </p>
        <p className="about-text">
          Our experienced team is here to support you with professional guidance
          and a wide range of medical supplies, making healthcare accessible and
          reliable for all.
        </p>
        <div className="pharmacist-profile">
          <img src={Pharmacist} alt="Pharmacist" className="pharmacist-photo" />
          <h3 className="pharmacist-name">Dr. John </h3>
          <p className="pharmacist-designation">Chief Pharmacist</p>
          <p className="pharmacist-qualification">
            B.Pharm, M.Pharm, PhD in Pharmacology
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
