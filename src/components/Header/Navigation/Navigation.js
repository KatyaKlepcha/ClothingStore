import React from 'react'
import styled from "styled-components";

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 160%;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 400;
  //padding: 28px 0 32px 214px;

`


export default class Navigation extends React.Component {

    clickWomen = () => {
        alert('Здесь будет женская одежда');
    }
    clickMen = () => {
        alert('Здесь будет мужская одежда');
    }
    clickKids = () => {
        alert('Здесь будет детская одежда');
    }


    render() {
        return (
            <NavigationWrapper>
                <a onClick={this.clickWomen}>WOMEN</a>
                <a onClick={this.clickMen}>MEN</a>
                <a onClick={this.clickKids}>KIDS</a>
            </NavigationWrapper>
        )
    }
}