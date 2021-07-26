import React, { Component } from 'react';

class BookItem extends Component{

    render(){
        const {book} = this.props;
        console.log(book);
        return(
            <div>
                <table className="table table-hover table-dark"  style={{margin:'auto'}}>
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{ book.title }</td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td>{ book.condition }</td>
                    </tr>
                    <tr>
                        <td>price</td>
                        <td>{ book.price }</td>
                    </tr>
                    <tr>
                        <td>availabiliy_status</td>
                        <td>{ book.availabiliy_status }</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{ book.description }</td>
                    </tr>
                    <tr>
                        <td>payment</td>
                        <td>{ book.payment }</td>
                    </tr>
                    <tr>
                        <td>shipping</td>
                        <td>{ book.shipping }</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default BookItem;