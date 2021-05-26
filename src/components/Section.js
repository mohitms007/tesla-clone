import React from 'react'
import styled from 'styled-components'

const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg}) => {
  
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1> { title }</h1>
                <p> {description} </p>
            </ItemText>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText && (<RightButton>
                    {rightBtnText}
                </RightButton>)}
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
          
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  background-image: ${props => `url(images/${props.bgImage}`})};
  justify-content: space-between;
  align-items: center
`


const ItemText = styled.div`

  padding-top: 15vh;
  text-align: center;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px){
      flex-direction: column;
      space-between: 14px;
    }

  
`

const LeftButton = styled.div`

  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  margin-right: 8px;
  margin-bottom: 15px;
  
`
const Buttons = styled.div`

`

const RightButton = styled(LeftButton)`

    background: white;
    opacity: 0.6;
    color: black;

`

const DownArrow = styled.img`
    height: 40px;
    overflow-x : hidden;
    animation: animateDown infinite 1.5s;

`