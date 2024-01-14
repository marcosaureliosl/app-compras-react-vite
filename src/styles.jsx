import styled from "styled-components";


export const AddButton = styled.button `
background: #188cde;
color: #fff;
height:35px;
border-radius:5px;
padding:5px 10px;
cursor: pointer;
border:none;
margin-left:10px;
transition: opacity 0.3s ease;

&:hover {
    opacity: 0.8;
    color: #90a344;
}
`
export const Container = styled.div `
background: #9252ffbd;
padding: 20px;
border-radius:10px;


h1 {
    color: #fff;
}

input {
    height: 35px;
    border-radius:5px;
    border:none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
}

`

export const Product = styled.div `
display:flex;
justify-content:space-between;
align-items: center;
background: #fff;
border-radius: 5px;
margin-top:15px;
padding:0 10px;
text-transform: capitalize;
font-weight:bold;

`
export const MeuButton = styled.button `
background: transparent;
border: none;
cursor:pointer;
font-size:20px;
`
