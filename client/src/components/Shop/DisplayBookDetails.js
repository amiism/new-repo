// when user clicks to view each individual book
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import { getOneBook, deleteBook } from '../../actions/books';
import BookItem from './BookItem';
import SimpleModal from './DeleteBookModal';
import './Shop.css';
import Updatebookform from './UpdateBookForm'; 
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

class DisplayBookDetails extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    
    if(!this.props.book){
      this.props.getOneBook(id);
      console.log('book contain '+this.props.book);
    }

    /*
    axios
      .get('http://localhost:5000/api/books/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          book: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      })
    */
  };

  /*
  onDeleteClick (id) {
    axios
      .delete('http://localhost:5000/api/books/'+id)
      .then(res => {
        this.props.history.push("/shop");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };
  */
  onDeleteClick(){
    const { id } = this.props.match.params;
    console.log('book delete id contain '+this.props.book);
    this.props.deleteBook(id)
    .then(this.props.history.push("/shop"));
  }

  renderComfirmDelete(){
    return(
      <SimpleModal func={this.onDeleteClick.bind(this)}/>
    );
  }

  render() {
    // If there is no post match the given post ID      
    if(!this.props.book){
      return (<div>
                <h2>loading</h2>
              </div>);
    }
    
    return (
      <div className="DisplayBookDetails">
        <div>
          <Link to="/shop" className="btn btn-outline-warning float-left">
            Show Book List
          </Link>
        </div>
        <div style={{margin:'auto'}}>
          <BookItem book={this.props.book} />
        </div>
        <div className="btn-row">  

          {/*<Button type="button" className="btn btn-outline-danger btn-lg btn-block" 
            onClick=>
              Delete Book 1
          </Button>
          */}
          {this.renderComfirmDelete()}
          {/*}
          <Button type="button" className="btn btn-outline-danger btn-lg btn-block" 
            onClick={this.onDeleteClick.bind(this)}>
              Delete Book
          </Button>
          */}
          <Button>
            <Link to={`/shop/edit-book/${this.props.book._id}`} className="btn btn-outline-info btn-lg btn-block" 
              style={{ textDecoration: 'none' }}>
              Edit Book
            </Link>
          </Button>  
        </div>  
      </div>
    );
  }
}

function mapStateToProps({books}, ownProps) {
  return {     
    book: books[ownProps.match.params.id],
  };
}

export default connect(mapStateToProps, {
  getOneBook, deleteBook,
}) (DisplayBookDetails);