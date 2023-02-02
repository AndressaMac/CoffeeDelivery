import styled from "styled-components";



export const CheckoutContainer = styled.div`

display: grid;
grid-template-columns: 44.44vw 31.11vw;
gap: 16px;
margin-top: 5rem;

.formcontainer{
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

.formTitle{
display: flex;
flex-direction: row;
gap: 12px;
}
.Title{
 display: flex;
 flex-direction: column;
 gap: 0;

}
`

export const FormContent = styled.form`


display: flex;
flex-direction: column;
align-items: flex-start;
padding-right: 40px;
gap: 16px;

.inputFlex{
 display: flex;
 flex-direction: row;

}

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

.cpf{
  width: 200px;
}
.rua{
width: 240%;
}
.numero{
width: 200px;
}
.complemento{
width: 300%;
}
.bairro{
width: 200px
}
.cidade{
width: 276px
}
.uf{
width: 60px;
}

`

export const CoffeBuy = styled.div`

padding: 40px;
background: #F3F2F2;
border-radius: 6px 44px;


`

export const Payment = styled.div`

display: flex;
flex-direction: row;
padding: 16px;
gap: 12px;
 
div{
background: #E6E5E5;
border: 2px solid #E6E5E5;
border-radius: 6px;
padding: 16px;
font-family: 'Roboto';
font-style: normal;
color: ${(props) => props.theme['Text']};
}
 
div:hover{
cursor: pointer;
border: 2px solid ;
border-color: ${(props) => props.theme['Purple-Dark']} ;
}

`

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
background-color: brown;
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
color: ${(props) => props.theme['Text']}
}

span{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
color: ${(props) => props.theme['Text']};
}

`

export const CoffeePrice = styled.div`
display: flex;
flex-direction: column;
gap: 24px;

div{
display: flex;
flex-direction: row;
justify-content: space-between;
}

p{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
color: ${(props) => props.theme['Title']}
}

button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background: #DBAC2C;
border-radius: 6px;
border: none;
color: ${(props) => props.theme['white']};
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
padding: 10px;
}

`

