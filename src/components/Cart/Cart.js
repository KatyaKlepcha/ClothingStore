import React from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import {
    Availability,
    Model,
    Price,
    ProductDescription,
    SizeButton,
} from "../ProductPage/ProductPage";
import ProductD from "../../Common/image/ProductCardsPhoto/Product D.svg";
import ProductE from "../../Common/image/ProductCardsPhoto/Product E.svg";

const CartContainer = styled.div`
  height: 100vh;
  padding: 0 100px 0 100px;
  color: #1D1F22;
`;

const Title = styled.div`
  font-weight: 700;
  size: 32px;
  line-height: 40px;
  padding-bottom: 59px;
`;

const Image = styled.img`
  width: 141px;
  height: 185px;
`;

const Line = styled.hr`
  size: 1px;
  width: 1097px;
  color: #E5E5E5;
  margin: 15px 0 40px 0;
`;

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const AddButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: white;
  border: 1px solid;
`;

const DeleteButton = styled.button`
  width: 45px;
  height: 45px;
  background-color: white;
  border: 1px solid;
`


export default class Cart extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <CartContainer>
                    <Title>CART</Title>
                    <Line/>
                    <CartWrapper>
                        <ProductDescription>
                            <Model>Apollo</Model>
                            <Availability>Running Short</Availability>
                            <Price>$50.00</Price>
                            <SizeButton onClick={this.clickSize}>S</SizeButton>
                            <SizeButton onClick={this.clickSize}>M</SizeButton>
                        </ProductDescription>
                        <div>
                            <AddButton>+</AddButton>
                            <div>1</div>
                            <DeleteButton>-</DeleteButton>
                            <Image src={ProductD}/>
                        </div>
                    </CartWrapper>

                    <Line/>
                    <CartWrapper>
                        <ProductDescription>
                            <Model>Jupiter</Model>
                            <Availability>Wayfarer</Availability>
                            <Price>$75.00</Price>
                            <SizeButton onClick={this.clickSize}>S</SizeButton>
                            <SizeButton onClick={this.clickSize}>M</SizeButton>
                        </ProductDescription>
                        <div>
                            <AddButton>+</AddButton>
                            <div>2</div>
                            <DeleteButton>-</DeleteButton>
                            <Image src={ProductE}/>
                        </div>
                    </CartWrapper>

                </CartContainer>
            </div>
        )
    }
}