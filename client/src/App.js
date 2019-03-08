import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// var listUsers=["Ritesh","Aastha","Dipak"]
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      useremail:'',
      password:'',
      users:[],
      user:''
    }
  }
  onChange=(event)=>{
    this.setState({[event.target.id]:event.target.value})
  }
  componentWillMount(){
    console.log("ritesh will mount");
  }
  handleSubmit=(event) =>{
    fetch(`http://localhost:3001/users/login?user=${this.state.user}&password=${this.state.password}`).then(result=>{console.log('result',result) ;return result.json()})
    event.preventDefault();
  }
  componentDidMount(){
    fetch('http://localhost:3001/users').then(result=>{console.log('result',result) ;return result.json()}).then(data=>{
      console.log("before")
      this.setState({users:data})
    })
    console.log("AFTER")
    // setTimeout(_=>{
    //   this.setState({users:listUsers})
    // },5000)
  }
  
  render() {
    console.log("ritesh render");
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="email" value ={this.state.email} onChange={this.onChange}/>
        <input type="text"  id="password" value = {this.state.password}onChange={this.onChange}/>
        <select onChange={e=>{
          this.setState({user:e.target.value})
        }}>
          {this.state.users.map(row=>{
            return <option key={row.id}>{row.login}</option>
          })}
        </select>
        <button type="submit">submit</button>
      </form>
    </div>
    );
  }
}

export default App;
