import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 0 auto;
  width: 100%;
  height:180vh;
`;

export const Header = styled.div`
  display: flex;
  width: 80%;
  height: 10vh;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const H1 = styled.h1`
position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  /* height: 10vh;
  margin-bottom: 8vh; */
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 25vh;
  right: 50%;
  width: 40%;

  height: 82vh;
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8vh;
  display: flex;
  font-size: 20px;
  `;

export const Div = styled.div`
display: flex;
justify-content: center;
width: 40%;
height: 45vh;

position: absolute;
top: 108vh;
right: 50%;
`;

export const Ul = styled.ul`
font-size: 20px;
width: 100%;
height: 40vh;
`;

export const Box = styled.div`
position: absolute;
  top: 25vh;
  left: 50%;

  width: 40%;
  height: 100vh;
`;
export const H3 = styled.h3`
display: flex;
align-items: center;
width: 100%;
height: 8vh;
font-size: 20px;
`;

export const P = styled.p`
top: 8vh;
font-size: 20px;
margin-bottom: 2vh;
`;
export const H4 = styled.h4`
top: 8vh;
font-size: 1.4rem;
color: red;
margin-bottom: 2vh;
`;
