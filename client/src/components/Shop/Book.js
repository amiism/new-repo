//Part of show book list 

import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import {Box, Card,CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({    
    root: {
      maxWidth: 450,
      textDecoration: 'none',
      margin:'auto',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
    expand: {
        marginLeftt: 'auto',
    },
}));

const Book = (props) => {
    const book = props.book;
    const classes = useStyles();

    return(
        <div className="card-container">
            {/*<img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/shop/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.description}</p>
            </div>*/}
            
            <Link to={`/shop/show-book/${book._id}`} style={{ textDecoration: 'none' }}>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                            r
                            </Avatar>
                        }
                        title="Seller: "
                        subheader="timestamp: "
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3"
                        title={ book.title }
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Title: {book.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Price: {book.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Condition: { book.condition }
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" className="like-item">No<FavoriteIcon /></IconButton>
                        <IconButton aria-label="share"><ShareIcon /></IconButton>
                        <IconButton aria-label="settings" className="expand"><MoreVertIcon /></IconButton>
                    </CardActions>
                </Card>
            </Link>
            
        </div>
    )
};

export default Book;