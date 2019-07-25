import React, { Component } from 'react'

export default class Saudacao extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      tipo: this.props.tipo,
      nome: this.props.nome
    }
    this.atualizarTipo = this.atualizarTipo.bind(this)
  }

  atualizarTipo(e) {
    this.setState({ tipo : e.target.value })
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
        <input type='text' placeholder='Tipo...'
          value={tipo} onChange={this.atualizarTipo} />
        
        <input type='text' placeholder='Nome...'
          value={nome} onChange={(e) => this.atualizarNome(e.target.value)} />
      </div>
    )
  }
}