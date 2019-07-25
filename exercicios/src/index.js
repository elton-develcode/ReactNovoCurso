import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
ReactDOM.render(
  <div>
    <Pai nome='Elton' sobrenome='Veiga'>
      <Filho nome='Pedro' />
      <Filho nome='Jose' />
      <Filho nome='Paula' />
    </Pai>
  </div>
, document.getElementById('root'))