import React from 'react';

const InfoIcon = ({ ...otherProps }) => (
  <svg {...otherProps} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#414B5D"/>
    <path d="M12 13V12.7667C12 12.0112 12.5061 11.6111 13.0121 11.2889C13.5061 10.9778 14 10.5778 14 9.84448C14 8.82226 13.1085 8 12 8C10.8915 8 10 8.82226 10 9.84448" stroke="#10B3E8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16H12.009" stroke="#10B3E8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default InfoIcon;
