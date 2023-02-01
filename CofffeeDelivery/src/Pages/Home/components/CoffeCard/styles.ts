import styled from "styled-components";


export const CoffeeCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;

margin-top: 50px;
width: 256px;
height: 310px;
left: 0px;
top: 0px;

/* Base/Card */

background: #F3F2F2;
border-radius: 6px 36px;


p{
display: flex;
padding: 4px 8px;
background: ${(props) => props.theme['Yellow-Light']};
border-radius: 50px;
width: fit-content;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 0.8rem;
color: ${(props) => props.theme['Yellow-Dark']};
}

h1{
font-family: 'Baloo 2';
font-style: normal;
font-weight: 700;
font-size: 20px;
color: #403937;
}
span{

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #8D8686;
text-align: center;
padding: 20px;
}

`
export const Coffee = styled.div`


position: relative;
width: 120px;
height: 120px;
top: -20px;
background: ${(props) => props.theme['Yellow-Dark']};
border-radius: 50%;



`

export const Buy = styled.section`
display: flex;
flex-direction: row;
align-items: center;
gap: 5px;

p{
  background: transparent;
  color: #574F4D;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
padding: 0;

}
span{
font-family: 'Baloo 2';
font-style: normal;
font-weight: 400;
color: #574F4D;
font-size: 16px;
background: none;
padding: 0;
}


`

export const CartPurple = styled.a`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;
gap: 4px;

width: 38px;
height: 38px;

background: ${(props) => props.theme['Purple']};
border-radius: 6px;

`






