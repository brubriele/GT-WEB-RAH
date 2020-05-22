import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';
// import MenuNav from '../MenuNav/Menu.index../MenuNav/Menu.styled'

export default class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { active: false };
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
        console.log('O link foi clicado.');
    }

    render() {
        return (
            <div>
                <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </div>
        );
    }
}
