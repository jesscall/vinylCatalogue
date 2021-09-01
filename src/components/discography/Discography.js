import React from 'react';
import Album from './Album';

function Discography({match}) {
   console.log(match);
   return <Album id={match.params.id}/>

}

export default Discography;