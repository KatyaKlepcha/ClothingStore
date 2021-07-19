import './App.css';
import React from 'react'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {createGlobalStyle} from 'styled-components';
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway';
  }

  h2 {
    font-size: 42px;
    line-height: 67.2px;
    font-style: normal;
    font-weight: 400;
  }
  
`;

export default class App extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <Header/>
                <Main/>
                <ProductPage/>
                <Cart/>
            </div>

        );
    }
}



