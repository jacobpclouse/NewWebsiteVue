import styled from 'styled-components';
import profile from '../Pictures/profile.jpg';


export const SiteBackground = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: greenyellow;

`;

export const PcScreen = styled.div `
    height: 80%;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: 
        linear-gradient(rgb(0,143,104), black) padding-box,
        linear-gradient(35deg, #b49e72, #bda981, #c5b391, #cdbea1, #d6c9b1) border-box;
    
    border-radius: 3% / 50%;
    border: 25px solid transparent;


    &:nth-child(1){
        
    }
`;

export const ProfilePic = styled.div `
    background: url(${profile}) no-repeat;
    box-sizing:border-box;
    height: 38%;
    width: 20%;
    background-size: 100% auto;
    border: 2px solid black;
`;


export const KeyboardMain = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background:linear-gradient(to right, #b49e72, #bda981, #c5b391, #d6c9b1, #b49e72) border-box;
    height: 7%;
    width: 75%;
    border-radius:7em 7em 90em 90em;

    
`;

export const KeyboardKey = styled.div `
    height: 50%;
    width: 7%;
    margin-top: -1%;


    &:nth-child(n){
        border-radius: 95em 95em 20em 50em ;
        background:linear-gradient(to bottom, #a36767, #784343) border-box;
    }

    &:nth-child(2n){
        border-radius: 95em 95em 50em 20em ;
        background:linear-gradient(to bottom, #8c6161, #784343) border-box;
    }
`;