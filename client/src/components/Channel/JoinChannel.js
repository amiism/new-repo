import React from 'react';
import SearchBar from 'material-ui-search-bar';

function JoinChannel(){
    return(
        <div>
            <h1>Join Channels</h1>
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                  margin: '0 auto',
                  maxWidth: 800
                }}
            />
        </div>
    );
}

export default JoinChannel;