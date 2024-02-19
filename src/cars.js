import React from"react";
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={color:"blue"}
    }

    render()
    {
        return(<div>
            <img src={this.props.image} style={{borderColor:this.props.color}}></img>
            <h1> brand is:{this.props.brand}</h1>
            <h1>ModelYear is:{this.props.model} </h1>
            <h1> color is:{this.props.color} </h1>
            <h1> Gear is:{this.props.gear}</h1>
        </div>)
    }

}


export default Car;