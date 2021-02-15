import {Component} from 'react';

class CurrentCalendarMounth extends Component{
    constructor (props) {
        super(props);
        this.week = {'Sun': [], 'Mon': [], 'Tue': [], 'Wed': [], 'Thu': [], 'Fri': [], 'Sat': []};
        this.date = this.props.date;
        this.totalDaysInMonth = new Date(this.date.getYear(), this.date.getMonth(), 0).getDate();
        let dateIterate = [];
        for (var i=1; i<=this.totalDaysInMonth; i++) {
            let iDate = new Date(this.date.getYear(), this.date.getMonth(), i);
            dateIterate = new Intl.DateTimeFormat('en-US', { weekday: 'short'}).format(iDate);
            this.week[dateIterate].push(i); 
        }
        
    }
    render(){
        return <>
            {Object.entries(this.week).map(([key, val], i) => (
                <div>
                    <span>{key}</span>
                    <span>{val.map((v) => <i> | {v === this.props.currentDay ? <span style={{color: "red"}}>{v}</span> : <span>{v}</span>} </i> )}</span>
                    <br />
                </div>
            ))}    
        </>;
    }
}
export default CurrentCalendarMounth;