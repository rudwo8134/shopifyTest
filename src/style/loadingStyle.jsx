import styled from "styled-components";
import { Commonstyle } from "../Commonstyle";


const LoadingWrapper =styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Commonstyle.color.lightGreen};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const LoadingText = styled.span`
  margin-top: 1rem;
  font-size: ${Commonstyle.fontSize.large};
  font-weight: ${Commonstyle.fontWeight.bold};
  text-transform: capitalize;
  transition: 0.5s ease-in-out all;
  :hover{
    transform: scale(1.05) translateY(10px);
    color: ${Commonstyle.color.white};
  }
`



export { LoadingWrapper, LoadingText };