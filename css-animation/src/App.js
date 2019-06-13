import React from 'react';
import './App.css';
import './Demo.css';
import DemoContainer from './DemoContainer';
import Square from './Square';

export default class App extends React.Component {

  render() {
    const demos = [
      {
        title: '水平位移',
        animation: 'move1 1.5s',
        cssText: `
  {
    from {transform: translateX(0px);}
    to {transform: translateX(100px);}
  }`
      },{
        title: '垂直位移',
        animation: 'move2 1.5s',
        cssText: `
  {
    from {transform: translateY(0px);}
    to {transform: translateY(30px);}
  }`
      },
      {
        title: '放大/缩小',
        animation: 'move3 2s',
        cssText: `
  {
    0% {transform: scale(0.5);}
    50% {transform: scale(3);}
    100% {transform: scale(1);}
  }`
      }
  ];
    return (
      <div className="App">
        <button style={{animation:'move3 2s'}}></button>
        {demos.map((demo,index)=>{
          return <DemoContainer title={demo.title} cssText={demo.cssText} animation={demo.animation} key={index}>
            <Square></Square>
          </DemoContainer>
        })}
      </div>
    );
  }
 
}

