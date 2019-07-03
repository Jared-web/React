import React from 'react';

const list =['https://cognition.dev.stackworx.cloud/api/status', 'https://ord.dev.stackworx.io/health'];

const serverlist = () => (
  <ul>
    {list.map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);

//Prod1 - https://cognition.dev.stackworx.cloud/api/status
//Prod2 - https://ord.dev.stackworx.io/health
//Prod3 - https://api.durf.dev.stackworx.io/health
//Test4 - https://prima.run/health
//Test5 - https://stackworx.io/
//Test6 - https://stackworx.io/

export default serverlist
