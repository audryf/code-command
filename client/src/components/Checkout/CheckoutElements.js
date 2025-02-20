import styled from "styled-components";
import { mobile, mobile2 } from "../../responsive";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;

  @media screen and (max-width: 380px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin: 20px;

  @media screen and (max-width: 960px) {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
  }
`;

export const MobileSummary = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    margin-top: 1.5rem;
    display: block;
    flex-direction: column;
    width: 100%;
  }
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button2 = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0467fb;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    align-items: center;
    position: absolute;
    left: 35%;
  }
`;

export const CheckLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const ShopLink = styled(Link)`
  color: #fff;
  margin-right: 2rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const MsgContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  background: #fff;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: black;

  h3 {
    text-align: center;
  }
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 14%;
  right: 2%;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #0467fb;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: #4b59f7;
    transform: scale(1.09);
    transition: all 0.3s ease-out;
  }
  ${mobile2({ display: "none" })}
`;

export const IconWrap = styled.span``;

export const CartIcon = styled(FaCartPlus)`
  color: #d9d9d9;
  font-size: 1.5rem;
`;
export const CartImg = styled.img`
  width: 50px;
  margin-right: 1rem;
`;
