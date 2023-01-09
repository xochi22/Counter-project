import React from 'react';

const Count = props => {
let styles;

if(props.counter === 0){
    styles={
        color: 'red'
    }
}
else if (props.counter >= 1 && props.counter <=10){
    styles={
        color: 'orange'
    }
}
else if (props.counter >=11 && props.counter <=100){
    styles={
        color:'purple'
  }
}
else if (props.counter >=101 && props.counter<=1000){
    styles={
        color:'blue'
    }
}
else(
    styles={
        color:'yellow'
    }
)
    return(
        <div>
        <h1 style={styles}>{props.counter}</h1>  
        </div>
    );
};
export default Count;