import React, { useState, useEffect } from 'react';
import PrimarySearchAppBar from './Navbar';
import Sidebar from './Sidebar';
function StatusPage() {
  const [status, setStatus] = useState('Loading...');
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Simulate fetching status from an API (replace with actual data fetching)
    setTimeout(() => {
      setStatus('All systems operational');
      setShowImage(true); // Show the image after updating the status
    }, 2000); // Simulate a 2-second delay
  }, []);

  return (
    <div className="status-page">
      <PrimarySearchAppBar />
    
        <h1>Status</h1>
        <p>{status}</p>
        {showImage && (
          <div className='image-wrapper'>
          <img
          src="https://www.researchgate.net/profile/Gul-Baloch-2/publication/271339663/figure/tbl3/AS:668975851663360@1536507680117/Details-about-Crime-Prisoners-Status-Education-and-Co-accused.png"
          alt="Status Image"

        />
        </div>
        )}
      
    </div>
  );
}

export default StatusPage;