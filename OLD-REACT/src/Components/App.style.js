import styled from 'styled-components';


export const SiteBackground = styled.div `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: greenyellow;

`;

export const PcScreen = styled.div `
    height: 80%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: 
        linear-gradient(rgb(0,143,104), black) padding-box,
        linear-gradient(to right, #3e3e3e, #c5b391) border-box;
    border-radius: 5% / 50%;
    border: 25px solid transparent;

    /* border-style: solid;
    border-width: 10px;
    border-radius: 10% / 50%; */
   
    /* &:after{
        border-image: linear-gradient(45deg, #e81088, #abb3bd) 1
        border-image: linear-gradient(45deg, rgb(0,143,104), rgb(111,203,159)) 1;
    } */

    &:nth-child(1){
        
    }
`;