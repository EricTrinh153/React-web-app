import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person'; 
class App extends Component {
  state={
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Stephanie',age:28},
    ]
  };
  
  switchNameHandler = (newName)=>{
    // console.log('Was clicked!');
    // DO NOT DO THIS: this.state.persons[0].name ="Maximillians";
    this.setState({
      persons:[
        {name:newName,age:28},
        {name:'ManuA',age:29},
        {name:'Stephaniy',age:28},
      ]
    })
  }


  render(){
    return(
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p1>This is really working</p1>
        <p><button onClick={()=>this.switchNameHandler('Maximillian')}>Switch Name</button></p>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Max!')}>Hello</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
