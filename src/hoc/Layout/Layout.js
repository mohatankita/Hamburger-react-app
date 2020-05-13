import React, { Component } from 'react';
import Aux from '../Auxilliary/Auxilliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';
import { connect } from 'react-redux';

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
                <Toolbar isAuth={ this.props.isAuthenticated }
                    drawToggleClicked={this.sidedrawerToggleHandler} />
                <Sidedrawer isAuth={ this.props.isAuthenticated }
                        closed={this.sidedrawerClosedHandler} open={this.state.showSidedrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);