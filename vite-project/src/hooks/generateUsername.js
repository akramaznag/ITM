import React from 'react'

export default function generateUsername(firstName,lastName) {
    if (!firstName || !lastName) console.log('empty values');
    const userName = `${firstName.charAt(0).toUpperCase()}.${lastName.toUpperCase()}`;
    return userName;
 
}
