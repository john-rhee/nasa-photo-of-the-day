import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from "styled-components";
import { Container, Row, Col } from 'reactstrap';

const NasaCard = props => {
  return (
    // <div className="cards" key={props.date}>
    //   <h2>Title: {props.title}</h2>
    //   <img className="nasaimg" alt="nasaphoto" src={props.photo} />
    // </div>
    <Card>
      <Container>
      <StyledImg className="nasaimg" alt="nasaphoto" src={props.photo} />
      <CardBody>
        <StyledTitle>Title: {props.title}</StyledTitle>
        <StyledSubTitle>Date: {props.date}</StyledSubTitle>
        
        <Col  sm="12" md={{ size: 6, offset: 3 }}>{props.exp}</Col>
        
      </CardBody>
      </Container>
    </Card>
 
  );
};
export default NasaCard;

export const StyledImg = styled.img`
  width: 800px;
  height:800px;
`;  

export const StyledTitle = styled.h1`
  font-size:39px;
`;  

export const StyledSubTitle = styled.h2`
  font-size:20px;
`;  