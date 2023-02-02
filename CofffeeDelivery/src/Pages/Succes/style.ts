import styled from "styled-components";

export const BoxResults = styled.div`

display: flex;
flex-direction: column;
padding: 40px;
margin-top: 2rem;
background: linear-gradient(white, white) padding-box,
          linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,217,29,1) 52%, rgba(252,176,69,1) 100%) border-box;
border-radius: 6px 36px;
border: 1px solid transparent;


div{
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding: 10px;
  gap: 20px;
}


`

export const SuccessBox = styled.div`
display: flex;
flex-direction: row;
margin-top: 5rem;


`

export const LesftBox = styled.div`

h1{
font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
color: ${(props) => props.theme['Yellow-Dark']};
}
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
color: ${(props) => props.theme['Subtitle']};
}

`