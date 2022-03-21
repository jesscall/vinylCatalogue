import React from 'react';
import Album from './Album';

function Discography({match}) {
   return <Album id={match.params.id}/>

}

export default Discography;