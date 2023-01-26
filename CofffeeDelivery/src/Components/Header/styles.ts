import styled from "styled-components";

export const HeaderContainer = styled.header`

display: flex;
align-items: center;
justify-content: space-between;

nav{
  display: flex;
  gap:0.5rem
}
`

export const SpanLocal = styled.span`
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 4px;
width: 143px;
height: 38px;
background: ${(props) => props.theme['Purple-Light']};
border-radius: 6px;

`
export const SpanCart = styled.a`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 4px;

width: 38px;
height: 38px;

background: ${(props) => props.theme['Yellow-Light']};
border-radius: 6px;

`