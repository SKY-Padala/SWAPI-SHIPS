import React, { useState } from 'react';
import StarShipsData from './StarShipsData';
import LoadingSpinner from '../../Interceptor/SpinInteptorComponent'
import './Starships.scss';

const StarShipsDisplayComponent = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
 

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className="tab-menu">
      
       <div className="tabs">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      
      </div>
      <div className="tab-content">
        {isLoading && <LoadingSpinner />}
        {activeTab === 0 && (<div className="background-image">
          <StarShipsData startLoading={startLoading} stopLoading={stopLoading} />
        </div>)}
      </div>
    </div>
  );
};



export default StarShipsDisplayComponent;
