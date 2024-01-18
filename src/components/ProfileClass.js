import React,{Component} from "react";

class ProfileClass extends Component{

    // sequence of rendering===>>
    // 1)constructor
    // 2)render
    // 3)componentDidMount

    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0,
        };
    }
    componentDidMount(){
        //Api calls 
        console.log("profile component did mount");
    }
    render(){
        console.log("render");
        const { count,count2 } = this.state;
        return(
            <>
            <h3>Profile Class component</h3>
            <p>Name: {this.props.name}</p>
            <p>Count : {count}</p>
            <p>Count2 : {count2}</p>
            <button onClick={()=>{
                this.setState({
                    count:1,
                    count2:2
                })
            }}>setcount</button>
            </>
        )
    }
}

export default ProfileClass;