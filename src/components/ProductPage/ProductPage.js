import React from 'react';
import styled from "styled-components";
import Header from "../Header/Header";
import ProductD from "../../Common/image/ProductCardsPhoto/Product D.svg";

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
`;

const ProductImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 79px;
  height: 80px;
  margin-bottom: 40px;
`;

const MainProductImage = styled.img`
  width: 610px;
  height: 511px;
`;

const ProductDescriptionContainer = styled.div`
  height: 100vh;
  width: 292px;
`;
const ProductDescription = styled.div`
  font-size: 30px;
  line-height: 27px;
  padding-bottom: 20px;
`;


const Model = styled.div`
  font-weight: 600;
`;

const Availability = styled.div`
  font-weight: 400;
`
const SizeTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  padding-bottom: 10px;
`;

const PriceTitle = styled(SizeTitle)`
  padding-bottom: 20px;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
`;


const SizeButton = styled.button`
  width: 63px;
  height: 45px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  background-color: white;
  color: #292929;
  border: 1px solid #1D1F22;
`;

const SizeContainer = styled.div`
  padding-bottom: 20px;
`;

const SizeButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const PriceContainer = styled.div`
  padding-bottom: 20px;
`;


const Button = styled.button`
  background-color: #5ECE7B;
  color: white;
  border: none;
  width: 292px;
  height: 52px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;
  margin-bottom: 20px;
`;
const Text = styled.p`
  //font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 25.59px;
`

export default class ProductPage extends React.Component {
    clickSize = () => {
        alert('Кнопка меняет цвет')
    }

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
                    <ProductDescriptionContainer>
                        <ProductDescription>
                            <Model>Apollo</Model>
                            <Availability>Running Short</Availability>
                        </ProductDescription>
                        <SizeContainer>
                            <SizeTitle>Size:</SizeTitle>
                            <SizeButtonWrapper>
                                <SizeButton onClick={this.clickSize}>XS</SizeButton>
                                <SizeButton onClick={this.clickSize}>S</SizeButton>
                                <SizeButton onClick={this.clickSize}>M</SizeButton>
                                <SizeButton onClick={this.clickSize}>L</SizeButton>
                            </SizeButtonWrapper>
                        </SizeContainer>
                        <PriceContainer>
                            <PriceTitle>Price:</PriceTitle>
                            <Price>$50.00</Price>
                        </PriceContainer>
                        <Button>ADD TO CART</Button>
                        <Text>Find stanning women's coctail dress and party dresses,
                            stand out in lace and metallic dresses and party dresses
                            from all your favorite brands</Text>
                    </ProductDescriptionContainer>
                </ProductContainer>
            </div>

        );
    }
}