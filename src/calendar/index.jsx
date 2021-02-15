import React from 'react';
import CurrentCalendarDay from './current-calendar-day';
import CurrentCalendarMounth from './current-calendar-mo';
window.ddd = new Date(2021, 2, 15);
class Calendar extends React.Component{
  constructor(props){
    super(props)
    this.date = new Date(2021, 2, 15);
  }
  
  render(){
    return(<>
        
        <CurrentCalendarDay day={this.date.getDate()} month={this.date.toLocaleString('default', { month: 'long' })}/>
        <CurrentCalendarMounth date={this.date} currentDay={this.date.getDate()} />
    </>);
  }
}

export default Calendar;