import styled from "styled-components";

export const IntroContainer = styled.div`

display: flex;
flex-direction: row;


padding-top: 94px;

h1{
  max-width: 588px;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: ${(props) => props.theme['Title']};
}
h2{

  max-width: 588px;
  
  padding-top: 1rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
 
color: ${(props) => props.theme['Subtitle']};
}
img{
  width: 33.9vw;
  object-fit: contain;
  top: calc(50% - 360px/2);
}

`

const ColorDiferent = {
  cart:'Yellow-Dark',
  box:'Text',
  clock:'Yellow',
  cup:'Purple'
} as const

interface StatusProps {
  statusColor: keyof typeof ColorDiferent
}

export const Itens = styled.div<StatusProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 32px;
  height: 32px;

  background: ${(props) => props.theme[ColorDiferent[props.statusColor]]};
  border-radius: 50%;

`


export const BoxItens = styled.div `
  max-width: 567px;
  margin-top: 50px;
  display: grid;
	grid-template-columns: 1fr 1fr ;
  padding-left: 0;

div{
  padding: 10px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  
}
p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;

color:${(props) => props.theme['Text']};

padding-top: 5px;


}


`
