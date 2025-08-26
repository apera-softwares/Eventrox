import React from 'react';


function CustomModal({showPopUp, closePopUp, children}){
  if (!showPopUp) {return null}
  return (
    <div className="customPopup" >
        <button className='closeBtn' onClick={closePopUp}><i class="fa fa-times" aria-hidden="true"></i>
</button>
        {children}
    </div>
  );
};

export default CustomModal;
