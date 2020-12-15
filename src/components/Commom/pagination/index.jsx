import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import { ButtonNumber, Wrapper } from './styled';

function Pagination({ page, count, limit, onPageChange }) {

  const [numberPages, setNumberPages] = useState()

  const [activeButton, setActiveButton] = useState(page)
  const [movePage, setMovePage] = useState(true)
  const [screenButtons, setScreenButtons] = useState([])

  useEffect(() => {
    convertValues();
  }, [page, count, limit])

  useEffect(() => {
    
    if(movePage) makePagesButton();
  }, [movePage])

  useEffect(() => {
    checkActiveButton()
  }, [activeButton])

  const convertValues = () => {
    const total = Math.round(count / limit);
    setNumberPages(total);
  }

  const changeActive = (event) => {
    resetActiveButtons();

    event.target.classList.add("btn-active");
    returnPage(event.target.innerText)
        
    setActiveButton(event.target.innerText)
  }

  const checkActiveButton = () => {
    const lastButton = screenButtons[screenButtons.length - 3]?.key

    if(Number(activeButton) >= Number(lastButton)) setMovePage(true)
  }

  const returnPage = (page) => {
    onPageChange(page)
  }  

  const resetActiveButtons = () => {
    const buttons = document.querySelectorAll(".btn-active");

    if(buttons.length < 1) return

    buttons.forEach((button) => {
      button.classList.remove("btn-active");
    })
  }    

  const makePagesButton = () => {
    const buttons = []
    
    setMovePage(false)

    if(activeButton > numberPages - 9) {

      buttons.push(<ButtonNumber onClick={(event) => changeActive(event)}>{1}</ButtonNumber>)
      buttons.push(<ButtonNumber>...</ButtonNumber>)

      for(var j=Number(activeButton); j <= numberPages - 9; i--) {
        buttons.push(<ButtonNumber key={j} onClick={(event) => changeActive(event)}>{j}</ButtonNumber>)
      }

    } else {

      for(var i=activeButton; i <= Number(activeButton) + 9; i++) {
        buttons.push(<ButtonNumber key={i} onClick={(event) => changeActive(event)}>{i}</ButtonNumber>)
      }

      buttons.push(<ButtonNumber>...</ButtonNumber>)
      buttons.push(<ButtonNumber onClick={(event) => changeActive(event)}>{numberPages}</ButtonNumber>)

    }

    setScreenButtons(buttons)
  }

  return (
    <Wrapper>
      {screenButtons}
    </Wrapper>
  )
}

Pagination.propTypes = {
  start: propTypes.number,
  end: propTypes.number,
  limit: propTypes.number,
  active: propTypes.bool
}

export default Pagination