import styled from "styled-components";

export const ButtonContainer = styled.div`

display: flex;
flex-direction: row;
padding: 0px;
justify-content: space-around;
align-items: center;
width: 100px;
height: 38px;

border-radius: 10px;
background: ${(props) => props.theme['Button']};


button{
  border: none;
  background: transparent;
  font-size: large;
  font-weight: 700;
  color: ${(props)=> props.theme['Purple']};

}
button:hover{
cursor: pointer;
}

span{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: ${(props) => props.theme['Title']};
padding: 0;
}
`