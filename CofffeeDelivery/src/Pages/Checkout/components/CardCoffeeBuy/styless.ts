import styled from "styled-components";

export const CoffeeSelect = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
margin-top: 20px;
margin-bottom: 20px;
padding-bottom: 20px;
border-bottom: 1px solid #E6E5E5 ;

.image{
width: 64px;
height: 64px;
border-radius: 50%;
}

p {
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
color: ${(props) => props.theme['Subtitle']};
}
.buttons{
  display: flex;
  flex-direction: row;
  gap: 5px;
}
div button {

width: 80px;
gap: 4px;
background: #E6E5E5;
border-radius: 6px;
border: transparent;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
color: ${(props) => props.theme['Text']};
cursor: pointer;

}

span{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
color: ${(props) => props.theme['Text']};
}

`