import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}
`;

export const Header = styled.header`
background-color: turquoise;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10vh;
`;
export const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
  
  width: 100%;
  height: 10vh;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  color: black;
  list-style: none;
  height: 8vh;
  width: 80%;
  `;

export const Li = styled.li`
  font-family: "Rubik Dirt", cursive;
  font-size: 30px;
  width: 100%;
  color: black;
  &:hover {
      cursor: pointer;
      color: white;
      transform:scale(1.2);
      transition: all .7s ;
  }
`;

export const Link = styled.a`
  color: #3b3535;
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
