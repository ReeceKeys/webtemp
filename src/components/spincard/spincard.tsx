import styled from "styled-components";
import { FaFire, FaStar, FaBolt } from "react-icons/fa";

const SpinCardRow = () => {
  const cards = [
    {
      heading: "Trending",
      subtitle: "Top Picks",
      brand: "Explore Now",
      icon: <FaFire />,
    },
    {
      heading: "Editor's Choice",
      subtitle: "Curated By",
      brand: "Uiverse",
      icon: <FaStar />,
      large: true, // middle card is larger
    },
    {
      heading: "Lightning Deals",
      subtitle: "Limited Time",
      brand: "Grab Fast",
      icon: <FaBolt />,
    },
  ];

  return (
    <Wrapper>
      {cards.map((card, index) => (
        <Card key={index} $large={!!card.large}>
          <div className="content">
            <div className="icon-wrapper">{card.icon}</div>
            <p className="heading">{card.heading}</p>
            <p>{card.subtitle}</p>
            <p className="brand">{card.brand}</p>
          </div>
        </Card>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  padding: 1rem 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const Card = styled.div<{ $large?: boolean }>`
  position: relative;
  width: ${({ $large }) => ($large ? "230px" : "180px")};
  height: ${({ $large }) => ($large ? "300px" : "240px")};
  border-radius: 10px;
  cursor: pointer;
  isolation: isolate;
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 12px;
    background: linear-gradient(-45deg, #eaf1b5ff 0%, #eff5adff 100%);
    z-index: 0;
    pointer-events: none;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-origin: center;

    @media (max-width: 768px) {
      transition: none; /* disable animation on mobile */
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 12px;
    background: linear-gradient(-45deg, #eaf2aaff 0%, #eff89eff 100%);
    z-index: -1;
    pointer-events: none;
    transition: filter 0.6s;

    @media (max-width: 768px) {
      transition: none; /* disable animation on mobile */
    }
  }

  @media (max-width: 768px) {
  &::before,
  &::after {
    inset: -3px; // smaller border on mobile
  }
}


  .content {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 12px;
    gap: 12px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .icon-wrapper {
    position: absolute;
    top: 16px;
    left: 16px;
    font-size: 28px;
    color: #f3fcb2ff;
    
    @media (max-width: 768px) {
    top: 16px;   // new mobile position
    left: auto; 
    right: 16px; // or wherever you want
    font-size: 24px; // optional smaller icon
  }
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }

  .content p:not(.heading) {
    font-size: 14px;
    color: #cfcfcf;
    margin: 0;
  }

  .brand {
    color: #e81cff;
    font-weight: 600;
  }

  &:hover::before {
    @media (min-width: 769px) {
      transform: rotate(-90deg) scaleX(1.30) scaleY(0.77);
    }
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 20vh;
  }
`;

export default SpinCardRow;
