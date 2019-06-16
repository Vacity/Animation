import React from 'react';
import './App.css';
import './Demo.css';
import DemoContainer from './DemoContainer';
import Square from './shapes/Square';
import Line from './shapes/Line';
import Circle from './shapes/Circle';


export default class App extends React.Component {

  render() {
    const demos = [
      {
        title: '水平位移',
        animation: 'move1 1.5s',
        body: 'square',
        cssText: `
animation: 'move1 1.5s',
@keyframes move1 {
    from {transform: translateX(0px);}
    to {transform: translateX(100px);}
  }`
      },{
        title: '垂直位移',
        animation: 'move2 1.5s',
        body: 'square',
        cssText: `
animation: 'move2 1.5s',
@keyframes move2 {
    from {transform: translateY(0px);}
    to {transform: translateY(30px);}
  }`
      },
      {
        title: '放大/缩小',
        animation: 'move3 2s',
        body: 'square',
        cssText: `
animation: 'move3 2s',
@keyframes move3  {
    0% {transform: scale(0.5);}
    50% {transform: scale(3);}
    100% {transform: scale(1);}
  }`
      },
      {
        title: '旋转',
        animation: 'move4 2s infinite alternate',
        body: 'line',
        style: {transformOrigin:'0 0'},
        cssText: `
  animation: 'move4 2s infinite alternate',      
  @keyframes move4 {
    0% {transform: rotate(20deg);}
    100% {transform: rotate(-90deg);}
  }`
      }
  ];
    const bodys = {
      square: <Square></Square>,
      line: <Line></Line>,
      circle: <Circle></Circle>
    }
    return (
      <div className="App">
        {demos.map((demo,index)=>{
          return <DemoContainer title={demo.title} cssText={demo.cssText} animation={demo.animation} key={index} additionStyle={demo.style}>
            {bodys[demo.body]}
          </DemoContainer>
        })}
      </div>
    );
  }
 
}

