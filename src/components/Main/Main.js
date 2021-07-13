import React from 'react'
import ProductD from '../../Common/image/ProductCardsPhoto/Product D.svg'
import ProductB from '../../Common/image/ProductCardsPhoto/Product B.svg'
import ProductC from '../../Common/image/ProductCardsPhoto/Product C.svg'
import ProductA from '../../Common/image/ProductCardsPhoto/Product A.svg'
import styled from "styled-components";

const Products = styled.div`
  padding: 0 102px 100px 100px;
`;

const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;


const ProductImage = styled.img`
  width: 356px;
  height: 338px;
  padding-bottom: 20px;

`;

const ProductDescription = styled.div`
color: ${(props) => (props.stock ? "grey" : "black")}
`


const ProductContainer = styled.div`
  font-weight: 300;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 28.8px;
  padding-bottom: 30px;
  position: relative;
`;

const ProductIsMissing = styled.div`
  text-transform: uppercase;
  font-size: 24px;
  line-height: 38.4px;
  text-align: center;
  font-weight: 400;
  color: #8D8F9A;
  position: absolute;
  top: 151px;
  left: 90px;
`

const ProductPrice = styled(ProductContainer)`
  font-weight: 500;
  line-height: 29px;
`;


export default class Main extends React.Component {
    render() {
        return (
            <Products>
                <h2>Cathegory name</h2>
                <ProductImageWrapper>
                    <ProductContainer>
                        <ProductImage src={ProductD}/>
                        <ProductDescription>
                            <div>Apollo Running Short</div>
                            <ProductPrice>$50.00</ProductPrice>
                        </ProductDescription>

                    </ProductContainer>
                    <ProductContainer>
                        <ProductImage src={ProductB}/>
                        <ProductDescription>
                            <div>Apollo Running Short</div>
                            <ProductPrice>$50.00</ProductPrice>
                        </ProductDescription>
                    </ProductContainer>
                    <ProductContainer>
                        <ProductImage src={ProductC}/>
                        <ProductIsMissing>Out of stock</ProductIsMissing>
                        <ProductDescription stock>
                            <div>Apollo Running Short</div>
                            <ProductPrice>$50.00</ProductPrice>
                        </ProductDescription>
                    </ProductContainer>
                    <ProductContainer>
                        <ProductImage src={ProductA}/>
                        <ProductDescription>
                            <div>Apollo Running Short</div>
                            <ProductPrice>$50.00</ProductPrice>
                        </ProductDescription>
                    </ProductContainer>
                    <ProductContainer>
                        <ProductImage src={ProductD}/>
                        <ProductDescription>
                            <div>Apollo Running Short</div>
                            <ProductPrice>$50.00</ProductPrice>
                        </ProductDescription>
                    </ProductContainer>
                    <ProductContainer>
                        <ProductImage src={ProductC}/>
                        <ProductDescription>
                            <div>Apollo Running Short</div>
                            <ProductPrice>$50.00</ProductPrice>
                        </ProductDescription>
                    </ProductContainer>
                </ProductImageWrapper>
            </Products>
        )

    }
}
