import React from 'react'
import Navegacion from './components/Navegacion';
import Principal from './components/Principal';
import './App.css';
import { Fragment } from 'react/cjs/react.production.min';


// const httpLink = createHttpLink({
//   uri:'https://servidor-gql-mintic.herokuapp.com/graphql'
// });




function App() {
  return (
      <Fragment>
        <div id="Appst">
          <Navegacion />
          <Principal />
        </div>
      </Fragment>
  );
}

export default App;
