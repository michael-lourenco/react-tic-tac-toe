import React from 'react';

// import { Container } from './styles';

export default function Square(props) {
  return (
   <button className="square" onClick={props.onClick}>
     {props.value}
   </button>
  );
}
