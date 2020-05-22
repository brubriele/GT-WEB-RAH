import { StyledMenu } from './Menu.styled';
import React, { Component } from "react";

class Hamburger extends Component {
    constructor() {
        super();
        this.state = { active: false };
    }
}

const MenuNav = () => {
    return (
        <StyledMenu >
            <a href="/">
                Quem é a RAH
        </a>
            <a href="/">
                Doações
          </a>
            <a href="/">
                Mapas
          </a>
        </StyledMenu>
    )
};

export default MenuNav;