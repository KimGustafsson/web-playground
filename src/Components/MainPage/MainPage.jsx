import React, {Component} from 'react';

class MainPage extends Component {
   constructor(props) {
      super(props);
   };

   render() {
      return (
         <div>
            <h1>{this.props.text}</h1>
            <h2>{`Nämen! Detta fungerar ju med ${this.props.text}`}</h2>
         </div>
      );
   };
}

export default MainPage;