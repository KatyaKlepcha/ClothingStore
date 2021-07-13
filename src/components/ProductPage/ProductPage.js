import React from 'react';
import styled from "styled-components";
import Header from "../Header/Header";
import ProductD from "../../Common/image/ProductCardsPhoto/Product D.svg";

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const ProductImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductImage = styled.img`
  width: 79px;
  height: 80px;
`;

const MainProductImage = styled.img`
  width: 610px;
  height: 511px;
`


export default class ProductPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ProductContainer>
                    <ProductImageWrapper>
                        <ProductImage src={ProductD}/>
                        <ProductImage src={ProductD}/>
                        <ProductImage src={ProductD}/>
                    </ProductImageWrapper>
                    <MainProductImage src={ProductD}/>
                </ProductContainer>
            </div>

        );
    }
}