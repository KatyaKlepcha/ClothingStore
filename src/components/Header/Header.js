import React from 'react'
import Navigation from "./Navigation/Navigation";
import logo from "../../Common/image/logo.png";
import Vector from "../../Common/image/Vector.png";
import Basket from "../../Common/image/Backet.png";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  //width: 1440px;
  height: 80px;
  justify-content: space-around;
  padding-top: 15px;
`


export default class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <div>
                    <Navigation/>
                </div>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <span>$</span>
                    <img src={Vector} alt="Vector"/>
                    <img src={Basket} alt="Basket"/>
                </div>

            </HeaderWrapper>
        )
    }
}