import styled from "styled-components";

export const HeaderContainer = styled.header`

display: flex;
align-items: center;
justify-content: space-between;

nav{
  display: flex;
  gap:0.5rem;
}
`

export const SpanLocal = styled.span`
display: flex;
flex-direction: row;
justify-content: center;
font-size: 14px;
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
flex-direction: column;
align-items: center;
padding: 8px;
gap: 4px;

width: 38px;
height: 38px;

background: ${(props) => props.theme['Yellow-Light']};
border-radius: 6px;

div{
display: flex;
align-items: center;
justify-content: center;
}
`
export const CounterCart = styled.div`
background: #C47F17;
border-radius: 1000px;
position: relative;
width: 16px;
height: 16px;
flex: none;
top: -45px;
right: -15px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;

color: ${(props) => props.theme['white']}
`