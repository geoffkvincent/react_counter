import React from 'react'

class Counter extends React.Component {
  state = { value: 0 }

  inc = () => {
    this.setState({ value: this.state.value + 1 })
  }

  dec = () => {
    this.setState({ value: this.state.value - 1 })
  }

  render() {
    //const name = this.props.name
    const { name } = this.props
    //const value = this.state.value
    const { value } = this.state
    return (
      <div style={{backgroundColor: name,color: 'white'}}>
        <h1>{name} counter</h1>
        <h1>{value}</h1>
        <div className='count-btn'>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </div>
      </div>
    )
  }
}

export default Counter