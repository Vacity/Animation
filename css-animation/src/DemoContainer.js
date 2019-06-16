import React from 'react';
import './Demo.css';


export default class DemoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            run: false
        }
    }
    
    runAnim() {
        this.setState({
            run: true
        });
    }

    endRun() {
        this.setState({
            run: false
        });
    }
    
    render() {
        const animation = this.state.run ? this.props.animation: '0';
        const style = {...this.props.additionStyle,animation:animation};

        return (
        <div className='demo-container'  onClick={()=>{this.runAnim();}}>
            <div className='demo-left'>
                <span className='demo-title'>{this.props.title}</span>
                <div>
                    <div className='dmeo-item' style={style} onAnimationEnd={()=>{this.endRun();}}>
                        {this.props.children}
                    </div>         
                </div>
                  
            </div>
            <pre className='demo-css'>{this.props.cssText}</pre>
        </div>
        );
    }

}