import React from 'react'
import ReactDOM from 'react-dom'
import {BomTarde, BoaNoite} from './componentes/Multiplos'

ReactDOM.render(
  <div>
    <BomTarde nome = 'Tiago' />
    <BoaNoite nome = 'Elton' />
  </div>
, document.getElementById('root'))