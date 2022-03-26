import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isModal2Open: false
        };
        //this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSignup = this. handleSignup.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });}

    toggleModal2() {
        this.setState({
            isModal2Open: !this.state.isModal2Open
        });}

    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleSignup(event) {
        this.toggleModal2();
        this.props.signupUser(this.firstname.value,this.lastname.value,this.username.value,this.password.value);
        event.preventDefault();

    }

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
        return(
            <React.Fragment>
            
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">Roma & BA Onling Ordering</NavbarBrand>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/favorites'> My Favorites</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                    <Link to='/menu'>
                                        <Button outline onClick={this.toggleModal}>
                                            
                                            <span className="fa fa-sign-in fa-lg"></span> Login
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                            
                                        </Button>
                                        </Link>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.username+' '}
                                        <Link to='/home'>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </Link>
                                        </div>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                        <Link to='/home'>
                                            <Button outline onClick={this.toggleModal2}>
                                            
                                                <span className="fa fa-sign-in fa-lg"></span> SignUp
                                            
                                            </Button>
                                        </Link>
                                        :
                                        <div>
                                        
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Roma & BA Onling Ordering</h1>
                                <p>Are you hungry!!!!! can't you go out because of Corona,
                                    <br/> We can delivery our delicious food for you door-step,only thing you have to do
                                    click and order online...
                                    </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModal2Open} toggle={this.toggleModal2}>
                    <ModalHeader toggle={this.toggleModal2}>SignUp</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignup}>
                            <FormGroup>
                                <Label htmlFor="firstname">First Name</Label>
                                <Input type="text" id="firstname" name="firstname"
                                    innerRef={(input) => this.firstname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input type="text" id="lastname" name="lastname"
                                    innerRef={(input) => this.lastname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Signup</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            
            </React.Fragment>
        );
    }
}

export default Header;


/*
<div className="navbar-text mr-3">{this.props.auth.user.username+' '}
                                        <Link to='/home'>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </Link>
                                        </div>



*/ 
