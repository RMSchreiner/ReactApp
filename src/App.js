import React,{Component} from 'react';
import Products from './Products';
import JumboTronComponent from './Jumbotron';
import UserForm from './UserForm';

class App extends Component{
  render(){

    return(
      <div>
        <JumboTronComponent>This is the long 
        sentence added to fill in for this props children.
        </JumboTronComponent>
       <UserForm/>
       <Products/>
      </div>
    );
  }
}

export default App;
