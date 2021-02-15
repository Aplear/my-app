import {Component} from 'react';

class CurrentCalendarDay extends Component{

  render(){
    
    //let options ={weekday:'long'}
    //let day = new Intl.DateTimeFormat('en-US', options).format(this.state.date);
    return <>
      <h2>{this.props.month}</h2>
      <p>{this.props.day}</p>
    </>;
  }
}
export default CurrentCalendarDay ;