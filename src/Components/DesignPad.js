import React from 'react';

class DesignPad extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      bgCol: props.bgCol
    }

}
render(){
    const bgCol = this.state.bgCol;
    return (
        <div className = {`bd-${bgCol} designPad`}>
        </div>
    )
}

}
export default DesignPad;