import styled from 'styled-components';
import { Commonstyle } from '../Commonstyle';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 90vh;
  background-color: ${Commonstyle.color.lightGreen};
  position: relative;
  padding-bottom: 10vh;
`;
const ContentsWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 7.5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  @media only screen and (max-width: 1200px) {
   padding-top: 14.5%;
    grid-template-columns: repeat(2, 1fr);
  };
  @media only screen and (max-width: 625px) {
    padding-top: 20.5%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const DataContainer = styled.div`
  position: absolute;
  z-index: 2;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2rem;
  color: white;
  @media only screen and (max-width: 625px) {
    top: 1.5rem;
  }
  input {
    border: 2px solid ${Commonstyle.color.lightGreen};
    width: 10rem;
    height: 2rem;
    font-size: ${Commonstyle.fontSize.large};
    border-right: none;
    ::placeholder {
      font-size: ${Commonstyle.fontSize.small};
      padding: 1rem;
    }
  }
  button {
    width: 4rem;
    height: 2.1rem;
    background-color: ${Commonstyle.color.white};
    border: none;
    border-radius: 4%;
    border-left: 0.2px ${Commonstyle.color.darkwhite} solid;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :hover {
      color: ${Commonstyle.color.white};
      background-color: ${Commonstyle.color.lightGrey};
    }
  }
`;
const CardWrapper = styled.div`
  width: 400px;
  background-color: ${Commonstyle.color.darkwhite};
  border-radius: 16px;
  padding: 1rem;
  padding-bottom: 4rem;
  position: relative;
  @media only screen and (max-width: 1200px) {
    width: 40vw;
    margin: 0 auto;
  }
  @media only screen and (max-width: 625px) {
    width: 80vw;
    margin: 0 auto;
  }
  .name {
    font-size: ${Commonstyle.fontSize.large};
    font-weight: ${Commonstyle.fontWeight.black};
    margin-bottom: 5px;
  }
  .APIName {
    font-size: ${Commonstyle.fontSize.small};
    font-weight: ${Commonstyle.fontWeight.regular};
    color: ${Commonstyle.color.lightGrey};
  }
  .sourceimg {
    width: 400px;
    height: 200px;
    object-fit: cover;
    margin: 1rem 0;
    @media only screen and (max-width: 1200px) {
      width: 100%;
      margin: 0 auto;
    }
    @media only screen and (max-width: 625px) {
      width: 100%;
      margin: 0 auto;
    }
  }
  .titleContainer {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: ${Commonstyle.fontSize.Medium};
      font-weight: ${Commonstyle.fontWeight.bold};
      color: ${Commonstyle.color.default};
      margin-bottom: 0.5rem;
    }
    .date {
      font-size: ${Commonstyle.fontSize.small};
      font-weight: ${Commonstyle.fontWeight.regular};
      color: ${Commonstyle.color.grey};
    }
  }
  .explanation {
  }
  .buttoncontainer {
    position: absolute;
    bottom: 1rem;
    right: 50%;
    transform: translateX(50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 40%;
    text-transform: capitalize;
    color: ${Commonstyle.color.white};
    padding: 0.5rem;
    border: none;
    background-color: ${({ Liked }) =>
      Liked ? Commonstyle.color.default : Commonstyle.color.green};
    cursor: pointer;
    border-radius: 3%;
    transition: 0.3s ease-in-out all;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: ${Commonstyle.color.red};
      font-size: 1rem;
    }
    :hover {
      color: ${Commonstyle.color.darkwhite};
      background-color: ${Commonstyle.color.lightGrey};
    }
  }
`;

export { Wrapper, ContentsWrapper, DataContainer, CardWrapper };
