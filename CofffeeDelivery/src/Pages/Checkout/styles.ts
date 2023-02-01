import styled from "styled-components";



export const CheckoutContainer = styled.div`

display: flex;
flex-direction: row;
gap: 16px;

div{
display: flex;
flex-direction: column;
}


`



export const FormContainer = styled.div `

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
background: #F3F2F2;
border-radius: 6px;
margin-bottom: 12px;


h1{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #403937;
}
 
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #574F4D;
}

`

export const FormContent = styled.form`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;


input{
background: #EEEDED;
border: 1px solid #E6E5E5;
border-radius: 4px;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
}

input:focus {
  outline: none;
}
.inptbase{
  width: 100%;
}

`

export const CoffeBuy = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 24px;

background: #F3F2F2;
border-radius: 6px 44px;

`