import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import './Starships.scss';

const StarshipsData = ({ startLoading, stopLoading }) => {
  const [starships, setStarships] = useState([]);
  const [featuredStarships, setFeaturedStarships] = useState([]);

  useEffect(() => {
    startLoading(); // Start loading spinner

    axios.get('https://swapi.dev/api/starships/?page=1')
      .then(response => {
               const filteredAndSortedStarships = response.data.results
          .filter(starship => starship.crew < 10)
          .sort((a, b) => a.crew - b.crew);
        setStarships(filteredAndSortedStarships);
        stopLoading(); // Stop loading spinner
       
        const featuredStarshipsList = filteredAndSortedStarships
          .filter(starship => starship.films.length > 1); // Customize the condition as needed
        setFeaturedStarships(featuredStarshipsList);

      })
      .catch(error => {
        console.error('Error fetching starships:', error);
        stopLoading(); // Stop loading spinner on error too
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="starships-tab">
      
     <div className="starships-list">
        {starships.map((starship, index) => (
          <div className="starship-card" key={index}>
            <div className="card-column">
               {/* <div className="starship-image">
                <img src={`https://image-url/${starship.name}.jpg`} alt={starship.name} />
              </div> */}
              <h3> {starship.name}{' '}
                {featuredStarships.find(fs => fs.name === starship.name) && (
                  <img  className="imgAlign" src={process.env.PUBLIC_URL+"/images/gold-trophy.png"} height={30} width={30} alt="Trophy" />
                )}</h3>
              <p>Model:</p>
              <p className="
                ">{starship.model}</p>
            </div>
            <div className="card-column">
              <div className="films-column">
                <p className="films-label">Films:</p>
                <p className="films-count">{starship.films.length}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default StarshipsData;
