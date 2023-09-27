import React from 'react';
import './cases.css'
import PrimarySearchAppBar from './Navbar';

function Cases() {
  return (
    <div>
        <PrimarySearchAppBar/>

    <div className='homeimagebox'>
      <div className="himg1">
        <img
          src='data:image/png;base64,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'
          style={{ width: '200px', height: '200px' }}
          alt="Product Image"
          />
        <h2>Case 1</h2>
        
      </div>
    </div>
    <div className='homeimagebox'>
      <div className="himg1">
        <img
          src='https://images-platform.99static.com//CCVX8od_-I8zK1x-en0rwqEq1UU=/360x71:1443x1154/fit-in/500x500/99designs-contests-attachments/97/97625/attachment_97625344'
          style={{ width: '200px', height: '200px' }}
          alt="Product Image"
          />
        <h2>Case 2</h2>
        
      </div>
    </div>
    <div className='homeimagebox'>
      <div className="himg1">
        <img
          src='https://images-platform.99static.com//CCVX8od_-I8zK1x-en0rwqEq1UU=/360x71:1443x1154/fit-in/500x500/99designs-contests-attachments/97/97625/attachment_97625344'
          style={{ width: '200px', height: '200px' }}
          alt="Product Image"
          />
        <h2>Case 3</h2>
        
      </div>
    </div>
    <div className='homeimagebox'>
      <div className="himg1">
        <img
          src='https://images-platform.99static.com//CCVX8od_-I8zK1x-en0rwqEq1UU=/360x71:1443x1154/fit-in/500x500/99designs-contests-attachments/97/97625/attachment_97625344'
          style={{ width: '200px', height: '200px' }}
          alt="Product Image"
          />
        <h2>Case 4</h2>
        
      </div>
    </div>
          </div>
  );
}

export default Cases;
