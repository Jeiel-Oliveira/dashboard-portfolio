import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import { ButtonNumber, Wrapper } from './styled';

function Pagination({ page, count, limit, onPageChange }) {

  const [numberPages, setNumberPages] = useState()

  const [activeButton, setActiveButton] = useState(page)
  const [rangeButton, setRangeButton] = useState()

  const convertValues = () => {
    const total = Math.round(count / limit);
    setNumberPages(total);
  }

  useEffect(() => {
    convertValues();
  }, [page, count, limit])  

  const changeActive = (event) => {
    resetActiveButtons();

    event.target.classList.add("btn-active");
    returnPage(event.target.innerText)

    setActiveButton(event.target.innerText)
    setRangeButton(event.target.innerText + 9)
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

    for(var i=activeButton; i <= Number(activeButton) + 9; i++) {
      buttons.push(<ButtonNumber key={i} onClick={(event) => changeActive(event)}>{i}</ButtonNumber>)
    }
    
    // buttons.push(<ButtonNumber>...</ButtonNumber>)
    // buttons.push(<ButtonNumber onClick={(event) => changeActive(event)}>{numberPages}</ButtonNumber>)

    return buttons
  }

  return (
    <Wrapper>
      {makePagesButton()}
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