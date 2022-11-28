import React from 'react';

const ConcertDetails = ( {eventInfo} ) => {

  const parseDate = (reviewDate) => {
    reviewDate = new Date(reviewDate);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = reviewDate.getFullYear();
    let date = reviewDate.getDate().toString().padStart(2, '0');
    let month = months[reviewDate.getMonth()];

    return `${month} ${date}, ${year}`;
  };

  return (
    <div style={{width: '100%'}}>
      <ul style={{textAlign: 'left'}}>
        {/* Location */}
        <li>
          <b>Location: </b><a>{eventInfo.city}, {eventInfo.state}</a>
        </li>

        {/* Price */}
        {eventInfo.average_price ?
          <li>
            <b>Price: </b><a>{eventInfo.average_price > 0 ? '$' + eventInfo.average_price : 'Free'}</a>
          </li> : null

        }

        {/* Artists */}
        <li>
          <b>{eventInfo.performers.length > 1 ? 'Artists: ' : 'Artist: '} </b>
          {eventInfo.performers.length > 1 ?
            eventInfo.performers.map((performer, index) => {
              let str = performer.name;
              if (index !== eventInfo.performers.length - 1) {
                str += ', ';
              }
              return
                <a>{str}</a>
            })
            : <a>{eventInfo.performers[0].name}</a>
          }
        </li>

        {/* Data */}
        <li>
          <b>Date: </b><a>{parseDate(eventInfo.datetime_local)}</a>
        </li>
      </ul>
    </div>

  )
}

export default ConcertDetails;