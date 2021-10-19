import styled, { createGlobalStyle } from "styled-components";
import "./font.css";

const Colors = {
  white: "#FEFEFE",
  bg: "#FAFAF8",
  cobalt: "#0252BC",
  scarlet: "#FF1F18",
  malachite: "#0AC763",
  silver: "#BDBCBC",
  cocoaBrown: "#332927",
  boulder: "#B8B4B4",
  black: "#332927",
  purple: "#5E18BB",
  purpleBg: "#F0E3FE",
  orange: "#FC462D",
  red: "#FD0000",
};

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html {
    min-height: 100vh;
    position: relative;
  }
  body {
    margin: unset;
    padding: unset;
    font-family: 'Poppins', sans-serif !important;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif !important;
  }
  `;

const Container = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  color: ${(props) => (props.color ? props.color : Colors.black)};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "unset")};
  position: ${(props) => (props.position ? props.position : "static")};
  top: ${(props) => (props.top ? props.top : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : "unset")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "unset")};
  min-height: ${(props) => (props.minHeight ? props.minHeight : "unset")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "auto")};
`;

const SuperContainer = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const NavMenu = styled.ul`
  margin: 0;
  padding: 0;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  & a {
    margin: 5px;
    color: white;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  }
`;

const Img = styled.img`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  align-self: ${(props) => (props.self ? props.self : "center")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  position: ${(props) => (props.position ? props.position : "unset")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  cursor: ${(props) => (props.cursor ? props.cursor : "unset")};
  float: ${(props) => (props.float ? props.float : "none")};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  background: ${(props) =>
    props.background ? props.background : Colors.malachite};
  color: ${(props) => (props.color ? props.color : Colors.white)};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0.375rem 0.75rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  text-align: center;
  text-decoration: none;
  border: ${(props) => (props.border ? props.border : "1px solid")};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "transparent"};
  border-radius: ${(props) => (props.radius ? props.radius : "8px")};
  align-self: stretch;
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0"};
  line-height: 1.5;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  &:disabled {
    background: darkgray;
    cursor: auto;
  }
  & svg {
    margin: 0px 5px;
  }
`;

const Form = styled.form`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.white};
  border: ${(props) =>
    props.border ? props.border : "3px solid" + Colors.white};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  position: ${(props) => (props.position ? props.position : "relative")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  box-sizing: border-box;
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 38px;
  background: ${(props) => (props.background ? props.background : Colors.bg)};
  color: ${(props) => (props.color ? props.color : Colors.black)};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  outline: none;
  appearance: ${(props) => (props.appearance ? props.appearance : "auto")};
  -moz-appearance: textfield;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "initial")};
  padding-left: 10px;
  align-self: center;
  & ::focus {
    border-bottom-color: ${(props) =>
      props.borderBottomColor ? props.borderBottomColor : Colors.orange};
    outline: 0;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Paragraph = styled.p`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.black)};
  position: ${(props) => (props.position ? props.position : "unset")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "Poppins")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "22px")};
  font-style: ${(props) => (props.fontSize ? props.fontSize : "italic")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "16px")};
`;

const SearchBar = styled.form`
  display: flex;
  height: 40px;
  align-self: center;
`;

const Hr = styled.hr`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const Title = styled.h3`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  color: ${(props) => (props.color ? props.color : Colors.primaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const SubTitle = styled.h5`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.secondaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const Label = styled.label`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "auto")};
  color: ${(props) => (props.color ? props.color : Colors.textPrimaryColor)};
  box-sizing: border-box;
`;

const Column = styled.div`
  display: ${(props) => (props.mdisplay ? props.display : "flex")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  width: ${(props) => (props.width ? props.width : "250px")};
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 50px;
  margin-left: 10em;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export {
  Colors,
  GlobalStyle,
  SuperContainer,
  Wrapper,
  Container,
  Input,
  NavMenu,
  Button,
  Img,
  Form,
  Paragraph,
  SearchBar,
  Hr,
  Title,
  SubTitle,
  Label,
  Column,
  Row,
};
