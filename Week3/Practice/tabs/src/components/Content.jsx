import React from 'react';
const Content = (props) => {

    const {allTabs, clickedTab} = props;

    return (

        <div className='BoxContent'>

            {allTabs[clickedTab].box}

        </div>
    )
}

export default Content;
