import React, { useState, useEffect } from 'react';

const Notification = ({event_title, days}) => {
  const [ show, setShow ] = useState( );

  useEffect(() => {

  }, [])

  return (
    <div>
      <p>You have {event_title}{days === 0 ? ' today!' : ' in ' + days + ' days.'}</p>
    </div>
  )
}

export default Notification;