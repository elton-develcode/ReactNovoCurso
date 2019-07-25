import React, { Component } from 'react'

export default class Saudacao extends Component {
 
  state = {
      tipo: 'Teste',
      nome: 'Teste'
    }

  atualizarTipo(tipo) {
    this.setState({ tipo })
  }

  atualizarNome(nome) {
    this.setState({ nome })
  }
  
  render() {
    const { tipo, nome } = this.state
    return (
      <div>
        <h1>{tipo} {nome}!</h1>
        <hr />
        <input type='text' placeholder='Tipo...' value={tipo} onChange={(e) => this.atualizarTipo(e.target.value)} />
        <input type='text' placeholder='Nome...' value={nome} onChange={(e) => this.atualizarNome(e.target.value)}/>
      </div>
    )
  }
}