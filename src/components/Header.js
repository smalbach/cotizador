import React from "react";
import styled from "@emotion/styled";
import { PropTypes } from "prop-types";

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10 px;
  font-weight: bold;
  color: #ffffff;
`;
const TextoHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  color: #fff;
  text-align: center;
`;

const Header = ({ titulo }) => (
  <ContenedorHeader>
    <TextoHeader>{titulo}</TextoHeader>
  </ContenedorHeader>
);

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;