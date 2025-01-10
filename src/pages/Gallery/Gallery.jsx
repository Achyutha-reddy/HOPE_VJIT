import React from 'react';
import './gallery.css';
import rythubandhusamithi1 from '../../assets/images/rythubandhusamithi1.jpg';
import rythubandhusamithi2 from '../../assets/images/rythubandhusamithi2.jpg';
import rythubandhusamithi3 from '../../assets/images/rythubandhusamithi3.jpg';
import rythubandhusamithi4 from '../../assets/images/rythubandhusamithi4.jpg';
import rythubandhusamithi5 from '../../assets/images/rythubandhusamithi5.jpg';
import rythubandhusamithi6 from '../../assets/images/rythubandhusamithi6.jpg';
import rythubandhusamithi7 from '../../assets/images/rythubandhusamithi7.jpg';
import rythubandhusamithi8 from '../../assets/images/rythubandhusamithi8.jpg';
import rythubandhusamithi9 from '../../assets/images/rythubandhusamithi9.jpg';
import rythubandhusamithi10 from '../../assets/images/rythubandhusamithi10.jpg';


const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="gallery-title">Explore Our Gallery</h2>

        {/* Section 1: Nature */}
        <div className="gallery-category">
          <h3 className="category-title connect2earth">CONNECT2EARTH</h3>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={rythubandhusamithi1} alt="rythu-bandhu-samithi" />
            </div>
            <div className="gallery-item">
              <img src={rythubandhusamithi2} alt="rythu-bandhu-samithi" />
            </div>
            <div className="gallery-item">
              <img src={rythubandhusamithi3} alt="rythu-bandhu-samithi" />
            </div>
            <div className="gallery-item">
              <img src={rythubandhusamithi4} alt="rythu-bandhu-samithi" />
            </div>
            <div className="gallery-item">
              <img src={rythubandhusamithi5} alt="rythu-bandhu-samithi" />
            </div>
            <div className="gallery-item">
              <img src={rythubandhusamithi6} alt="rythu-bandhu-samithi" />
            </div>
            <div className="gallery-item">
              <img src={rythubandhusamithi7} alt="rythu-bandhu-samithi" />
            </div>
            <div className="gallery-item">
              <img src={rythubandhusamithi8} alt="rythu-bandhu-samithi" />
            </div>
            <div className="gallery-item">
              <img src={rythubandhusamithi9} alt="rythu-bandhu-samithi" />
            </div>
            <div className="gallery-item">
              <img src={rythubandhusamithi10} alt="rythu-bandhu-samithi" />
            </div>
          </div>
        </div>

        {/* Section 2: Urban */}
        <div className="gallery-category">
          <h3 className="category-title">Urban</h3>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Urban Image 1" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Urban Image 2" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Urban Image 3" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Urban Image 4" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Urban Image 5" />
            </div>
          </div>
        </div>

        {/* Section 3: Architecture */}
        <div className="gallery-category">
          <h3 className="category-title">Architecture</h3>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Architecture Image 1" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Architecture Image 2" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Architecture Image 3" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Architecture Image 4" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Architecture Image 5" />
            </div>
          </div>
        </div>

        {/* Section 4: Lifestyle */}
        <div className="gallery-category">
          <h3 className="category-title">Lifestyle</h3>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Lifestyle Image 1" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Lifestyle Image 2" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Lifestyle Image 3" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Lifestyle Image 4" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Lifestyle Image 5" />
            </div>
          </div>
        </div>

        {/* Section 5: Abstract */}
        <div className="gallery-category">
          <h3 className="category-title">Abstract</h3>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Abstract Image 1" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Abstract Image 2" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Abstract Image 3" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Abstract Image 4" />
            </div>
            <div className="gallery-item">
              <img src="https://via.placeholder.com/300" alt="Abstract Image 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
