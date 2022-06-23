import React from 'react';

const Tab = (props) => {

    const {allTabs, setAllTabs, clickedTab, setClickedTab} = props;

    const changeTab = (index) => {

        setClickedTab(index);
    }

    //bonus
    const tabColor = (index) => {
        if(index === clickedTab)
        {
            return "currentTab";
        }
        else
        {
            return "standard";
        }
    }

    return (

        <div className='container'>
        {
            allTabs.map((item, index) => (
                <div className= {`TabLabel ${ tabColor(index)}`} onClick={(e) => changeTab(index)} key={index}>
                    {item.tab}
                </div>
               
            ))
        }

        </div>
    )
}

export default Tab;