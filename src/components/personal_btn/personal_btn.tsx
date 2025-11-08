import styled from 'styled-components';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";

const PersonalBtn = () => {
  return (
    <StyledWrapper>
      <button className="btn">
        <span>Connect</span>
        <div className="container">
          <a href='https://www.instagram.com' target='_blank'><FaInstagramSquare size={35}/></a>
          <a href=''><IoPersonCircleSharp size={35}/></a>
          <a href='https://www.github.com' target='_blank'><FaGithub size={35}/></a>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn {
    position: relative;
    display: flex;
    justify-content: center; /* center horizontally */
    align-items: center;     /* center vertically */
    overflow: hidden;
    cursor: default;
    width: 200px;
    height: 8vh;
    border: none;
    transition: all 1s ease;
  }

  .btn span {
    position: relative; /* <-- was absolute, now relative */
    height: 100%;
    width: 100%;
    display: flex;
    pointer-events: none;
    justify-content: center; /* center horizontally */
    align-items: center;     /* center vertically */
    z-index: 99;
    font-weight: 600;
    font-size: 16px;   /* adjust size as needed */
    text-align: center;
    line-height: 1;    /* not needed to match height now */
    letter-spacing: 2px;
    color: #eeeeed;
    background-color: #2f2f2f;
    padding: 0 20px;
    transition: all 0.5s ease;
  }

  .btn .container {
    display: flex;
    justify-content: center; /* center horizontally */
    align-items: center;     /* center vertically */
    gap: 30px; /* increase space between icons */
    position: absolute; /* hover icons appear over button */
  }

  .btn a {
    opacity: 0;
    transition: opacity 1s ease;
    color: "black";
  }

  .btn:hover span {
    opacity: 0;
  }

  .btn:hover a {
    opacity: 1;
  }
  .btn a:hover {
    color: #b8b8b8ff;
    cusror: pointer;
    }
`;


export default PersonalBtn;
