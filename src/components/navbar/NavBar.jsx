import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Box className="nav" p={2}>
      <Heading ml={3} color={'#243F4D'}>
        <Link to="/">Tienda</Link>
      </Heading>
      <Menu>
        <MenuButton as={Button} 
          bg={'#243F4D'} 
          color={'#fff'} 
          _hover={{ bg: '#3E6478', color: '#fff' }}
          rightIcon={<FaChevronDown />}>
          Categorías
        </MenuButton>
        <MenuList>
          <MenuItem className="btnDropdown" >
            <Link to={"/category/Remeras"}>Remeras</Link>{" "}
          </MenuItem>
          <MenuItem className="btnDropdown">
            <Link to={"/category/Buzos"}>Buzos</Link>
          </MenuItem>
          <MenuItem className="btnDropdown">
            <Link to={"/category/Pijamas"}>Pijamas</Link>
          </MenuItem>
          <MenuItem className="btnDropdown">
            <Link to={"/category/Zapatillas"}>Zapatillas</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Box>
  );
};

export default NavBar;
