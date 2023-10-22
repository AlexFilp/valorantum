import styled from 'styled-components'

export const AgentsItemLi = styled.li`
width: 100%;
border: 2px solid black;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
border-radius: 10%;
transition: transform 100ms ease-in-out;
&:hover,
&:focus {
    transform: scale(1.03);
}

`
export const AgentsItemP = styled.p`
text-align: center;
font-size: 20px;
font-weight: 700;
margin: 10px 0;
color: #ff0000;
`
export const AgentsItemImg = styled.img`
border-bottom: 2px solid black;
`