import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import MainPage from './MainPage/MainPage.jsx';
import ThreeTutorial from './ThreeTutorial/ThreeTutorial.jsx';
import './App.css';

class App extends Component {
   constructor() {
      super();

      this.state = {
         test: "Hello World"
      };
   }

   render() {
      return (
         <div>
            {/* <MainPage text={this.state.test}></MainPage> */}
            <ThreeTutorial></ThreeTutorial>
         </div>
      );
   }
}

export default App;

// Mount the application into the DOM
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;