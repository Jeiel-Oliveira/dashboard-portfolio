import React from 'react';
import CardInfo from 'components/Commom/Cards/cardInfo';
import Button from 'components/Commom/Buttons/button';

const MOCKED_BUTTONS = [
  {  
    name: "button-black",
    style: { backgroundColor: "black", heigth: "36px", borderRadius: "15px", color: "white" },
    text: "Pesquisar",
    hover: ""
  },
  {
    name: "button-blue",
    style: { backgroundColor: "blue", heigth: "15px", borderRadius: "50%" },
    text: "cancelar",
    hover: ""
  }
]

function ListButtons() {

  return (
    <div className="grid-container grid-column-4">
      {MOCKED_BUTTONS.map((value, index) =>
        <CardInfo
          key={index}
          title={value.name}
          className="grid-item">

          <button className="my-3" style={value.style}>{value.text}</button>

          <Button onClick={() => console.log('editando botão')} text="Editar" />
        </CardInfo>
      )}
    </div>
  )
}

export default ListButtons