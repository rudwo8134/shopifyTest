import styled from 'styled-components';
import { Commonstyle } from '../Commonstyle';
import { IoIosContact } from 'react-icons/io';
import { GiCancel } from 'react-icons/gi';
const Header = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: ${Commonstyle.color.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 625px) {
    position: relative;
    justify-content: space-between;
    padding-left: 2rem;
  }
`;
const HeaderTitle = styled.h3`
  color: ${Commonstyle.color.white};
  font-size: ${({ mobileContact }) =>
    mobileContact
      ? Commonstyle.fontSize.small
      : Commonstyle.fontSize.veryLarge};
  width: ${({ mobileContact }) => (mobileContact ? '35vw' : '')};
`;
const ContactIcon = styled(IoIosContact)`
  display: none;
  @media only screen and (max-width: 625px) {
    display: inline;
    position: absolute;
    top: 1.5rem;
    right: 3rem;
    width: 3rem;
    height: 3rem;
    color: ${Commonstyle.color.white};
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    :hover {
      color: ${Commonstyle.color.green};
    }
  }
`;
const CancelButton = styled(GiCancel)`
  display: none;
  @media only screen and (max-width: 625px) {
    display: inline;
    position: absolute;
    top: 1.5rem;
    right: 3rem;
    width: 3rem;
    height: 3rem;
    color: ${Commonstyle.color.white};
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    :hover {
      color: ${Commonstyle.color.red};
    }
  }
`;
const ContactInfo = styled.div`
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 625px) {
    display: none;
  }
  b {
    margin-right: 10px;
  }
  .name {
    color: ${Commonstyle.color.white};
    font-weight: ${Commonstyle.fontWeight.medium};
  }
  .email {
    color: ${Commonstyle.color.white};
    font-weight: ${Commonstyle.fontWeight.medium};
  }
`;



export {
  Header,
  HeaderTitle,
  ContactInfo,
  ContactIcon,
  CancelButton,
};
