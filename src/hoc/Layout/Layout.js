import React, { Component } from 'react';
import Aux from '../Auxilliary/Auxilliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
    state = {
        showSidedrawer: false
    }

    sidedrawerToggleHandler = () => {
        this.setState( (prevState) => { 
            return { showSidedrawer: !prevState.showSidedrawer }
        })
    }

    sidedrawerClosedHandler = () => {
        this.setState({ showSidedrawer: false })
    }
    render() {
        return (
            <Aux>
                <Toolbar drawToggleClicked={this.sidedrawerToggleHandler} />
                <Sidedrawer closed={this.sidedrawerClosedHandler} open={this.state.showSidedrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;