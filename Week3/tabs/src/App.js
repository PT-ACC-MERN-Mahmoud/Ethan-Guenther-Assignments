import React, {useState} from 'react';
import Tab from './components/Tab';
import Content from './components/Content';
import './App.css'
function App() {

  const tabs = [
    { tab: "Tab1", box: "This is the first tab" },
    { tab: "Tab2", box: "This is the second tab"},
    { tab: "Tab3", box: "This is the third tab"},
  ];

  const [allTabs, setAllTabs] = useState(tabs);

  const [clickedTab, setClickedTab] = useState(0);

  return (
    <div className='App'>
      <Tab allTabs = {allTabs}
            setAllTabs = {setAllTabs}
            clickedTab = {clickedTab}
            setClickedTab = {setClickedTab}
        />

        <Content allTabs = {allTabs}
                 clickedTab = {clickedTab}
        />


    </div>
  );
}

export default App;
