import styled from 'styled-components';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import * as React from 'react';

const PersonalBtn = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Desktop vs mobile sizes and gaps
  const iconSize = isMobile ? 30 : 35;
  const iconGap = isMobile ? 20 : 30;
  const buttonHeight = isMobile ? '6vh' : '8vh';

  return (
    <StyledWrapper buttonHeight={buttonHeight}>
      <button className="btn">
        <span>Connect</span>
        <div className="container" style={{ gap: iconGap }}>
          <a href='https://www.instagram.com' target='_blank'><FaInstagramSquare size={iconSize}/></a>
          <a href=''><IoPersonCircleSharp size={iconSize}/></a>
          <a href='https://www.github.com' target='_blank'><FaGithub size={iconSize}/></a>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ buttonHeight: string }>`
  .btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: default;
    width: 200px;
    height: ${(props) => props.buttonHeight};
    border: none;
    box-shadow: none;
    padding: 0;
    outline: none;
    transition: all 0.5s ease;
    background-color: #2f2f2f;
  }

  .btn span {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    pointer-events: none;
    justify-content: center;
    align-items: center;
    z-index: 99;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    letter-spacing: 2px;
    color: #eeeeed;
    background-color: #2f2f2f;
    padding: 0 20px;
    transition: all 0.5s ease;
  }

  .btn .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  .btn a {
    opacity: 0;
    transition: opacity 0.5s ease;
    color: white;
  }

  .btn:hover span {
    opacity: 0;
  }

  .btn:hover a {
    opacity: 1;
  }

  @media (hover: hover) {
    .btn a:hover {
      color: #f8ffc5ff;
      cursor: pointer;
    }
  }

  /* Mobile: always show icons, hide text, adjust height */
  @media (max-width: 768px) {
    .btn {
      height: 6vh;
      width: 150px;
      background-color: transparent;
    }

    .btn span {
      display: none;
    }

    .btn a {
      opacity: 1;
    }
  }
`;

export default PersonalBtn;
