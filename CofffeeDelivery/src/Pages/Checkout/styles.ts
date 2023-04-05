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

export const FormContainer = styled.form `

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

export const FormContent = styled.div`


display: flex;
flex-direction: column;
align-items: flex-start;
padding-right: 40px;
gap: 16px;
margin-top: 2rem;

.inputFlexfist{
display: flex;
flex-direction: row;
gap: 12px

}
.inputFlex{
display: flex;
flex-direction: row;
gap: 12px
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


.uf{
  width: 45px;
}

`

export const CoffeBuy = styled.div`

padding: 40px;
background: #F3F2F2;
border-radius: 6px 44px;


`

export const Payment = styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr ;
padding: 16px;
gap: 12px;



div{
  margin: 0;
  padding: 0;
  height: 70px;
  position: relative;
  width:7.5rem;
};

.paymentBox {
  margin: 0;
  padding: 0;
  height: 70px;
  position: relative;
  width:7.5rem;

}


input{
  border:transparent 1px solid;
}

input:checked + label {
  border : ${(toggle) => toggle ? '#4B2995': '#FFFFFF'} 1px solid;
}

label{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap:5px;
top: 0rem;
height: 70px;
position: absolute;
background: #E6E5E5;
box-sizing: border-box;
border: 2px solid #E6E5E5;
border-radius: 6px;
padding: 16px;
font-family: 'Roboto';
font-style: normal;
flex-grow: 0;
font-size: 12px;
color: ${(props) => props.theme['Text']};
&:hover {
cursor: pointer;
  }
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
cursor: pointer;
}

`

