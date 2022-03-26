import React, { Component,useState} from 'react';
import Menu from './menuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import DishDetailFirst from './DishDetailFirstComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Favorites from './FavoriteComponent';
import Map from './MapComponent';
import Confirm from './ConfirmComponent';
import PayWithPayPal from './PayComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {  fetchDishes,loginUser, logoutUser,postComment,fetchComments, fetchFavorites, postFavorite, deleteFavorite,signupUser } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    favorites: state.favorites,
    auth: state.auth
  }
}


const mapDispatchToProps = dispatch => ({
  
  fetchComments: () => {dispatch(fetchComments())},
  fetchDishes: () => { dispatch(fetchDishes())},
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  signupUser: (firstname,lastname,username,password) => dispatch(signupUser(firstname,lastname,username,password)),
  postComment: (dishId, rating, comment) => dispatch(postComment(dishId, rating, comment)),
  fetchFavorites: () => dispatch(fetchFavorites()),
  postFavorite: (dishId) => dispatch(postFavorite(dishId)),
  deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
});



class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchFavorites();
  }

  render() {
    const HomePage = () => {
      return(
        <Home/>
      );
    }

    const MapPage = ({match}) => {
      return(
        <Map
        dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]} 
        
     google={this.props.google}
     center={{lat: 6.244152, lng: 80.059080}}
     height='300px'
     zoom={15}
     
    />
      );
    }

    const ConfirmPage = ({match}) => {
      return(
        <Confirm
        dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
        city = {match.params.city}
        />
      );
    }

    const PaymentPage = ({match}) => {
      const [checkout, setCheckOut] = useState(false);
      
      return(
        <div>
          
        <div className="App">
      {checkout ? (
        <PayWithPayPal 
        dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
        deleteFavorite={this.props.deleteFavorite}
        />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Press Again To Checkout
        </button>
      )}
    </div>
    </div>
      );
    }

    const DishWithId = ({match}) => {
      /*if(this.props.auth.isAuthenticated && this.props.favorites.favorites.user===this.props.auth._id){
        return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          postComment={this.props.postComment}
          comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
          commentsErrMess={this.props.comments.errMess}
          postFavorite={this.props.postFavorite}
          favorite={this.props.favorites.favorites.dishes.some((dish) => dish._id === match.params.dishId)}
          
    
        />
      );
    }
      else if(this.props.auth.isAuthenticated && this.props.favorites.favorites.user!=this.props.auth._id){return(
        <DishDetailFirst dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              postComment={this.props.postComment}
              comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
              commentsErrMess={this.props.comments.errMess}
              postFavorite={this.props.postFavorite}
            />
      );}
      else {return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              postComment={this.props.postComment}
              comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
              commentsErrMess={this.props.comments.errMess}
              postFavorite={this.props.postFavorite}
              favorite={false}
              
            />
      );}*/

      /*return(
        this.props.auth.isAuthenticated
          ?
          
            <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              postComment={this.props.postComment}
              comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
              commentsErrMess={this.props.comments.errMess}
              favorite={this.props.favorites.favorites.dishes.some((dish) => dish._id === match.params.dishId)}
              postFavorite={this.props.postFavorite}
              
              
              
              
        
            />
          :
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              postComment={this.props.postComment}
              comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
              commentsErrMess={this.props.comments.errMess}
              favorite={false}
              postFavorite={this.props.postFavorite}
              
              
            />


          

        
      );*/
      //this.props.favorites.favorites = null;
      if(this.props.favorites.favorites === null){
          
          return(
            this.props.auth.isAuthenticated
              ?
              
                <DishDetailFirst dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
                  isLoading={this.props.dishes.isLoading}
                  errMess={this.props.dishes.errMess}
                  postComment={this.props.postComment}
                  comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
                  commentsErrMess={this.props.comments.errMess}
                  postFavorite={this.props.postFavorite}
                  //favorite={this.props.favorites.favorites.dishes.some((dish) => dish._id === match.params.dishId)}
                  
                  />
              :
              <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
                  isLoading={this.props.dishes.isLoading}
                  errMess={this.props.dishes.errMess}
                  postComment={this.props.postComment}
                  comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
                  commentsErrMess={this.props.comments.errMess}
                  postFavorite={this.props.postFavorite}
                  favorite={false}
                  
                />
    
    
              
    
            
          );
      }
      else{
        return(
          this.props.auth.isAuthenticated
            ?
            
              <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                postComment={this.props.postComment}
                comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
                commentsErrMess={this.props.comments.errMess}
                favorite={this.props.favorites.favorites.dishes.some((dish) => dish._id === match.params.dishId)}
                postFavorite={this.props.postFavorite}
                
                
                
                
          
              />
            :
            <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                postComment={this.props.postComment}
                comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
                commentsErrMess={this.props.comments.errMess}
                postFavorite={this.props.postFavorite}
                favorite={false}
                
              />
  
  
            
  
          
        );
      }
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
      )} />
    );
    

    return (
      <div>
        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} 
          signupUser={this.props.signupUser} 
          />
        
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <PrivateRoute exact path="/favorites" component={() => <Favorites favorites={this.props.favorites} deleteFavorite={this.props.deleteFavorite} />} />
              <Route path='/map/:dishId' component={MapPage} />
              <Route path='/confirm/:dishId/:city' component={ConfirmPage} />
              <Route path='/pay/:dishId' component={PaymentPage} />
              <Route exact path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


/*
this.props.auth.isAuthenticated
        ?
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        postComment={this.props.postComment}
        comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
        commentsErrMess={this.props.comments.errMess}
        favorite={this.props.favorites.favorites.dishes.some((dish) => dish._id === match.params.dishId)}
        postFavorite={this.props.postFavorite}
        
        />
        :
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
        isLoading={this.props.dishes.isLoading}
        errMess={this.props.dishes.errMess}
        postComment={this.props.postComment}
        comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
        commentsErrMess={this.props.comments.errMess}
        favorite={false}
        postFavorite={this.props.postFavorite}
        />

*/
/*this.props.favorites.value===null
            ?
            <DishDetailFirst dish={this.props.dishes.dishes.filter((dish) => dish._id === match.params.dishId)[0]}
              isLoading={this.props.dishes.isLoading}
              errMess={this.props.dishes.errMess}
              postComment={this.props.postComment}
              comments={this.props.comments.comments.filter((comment) => comment.dish === match.params.dishId)}
              commentsErrMess={this.props.comments.errMess}
              postFavorite={this.props.postFavorite}
            />
            : */