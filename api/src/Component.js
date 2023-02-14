import React from 'react'

class Component extends React.Component {
  
    constructor(){
        super();
        this.state={
            data_new:[],
        }
        console.log("hello");
    }
    componentDidMount() {
      fetch('http://localhost/ProjectReact/backend/read.php')
        .then(response => response.json())
        .then(data => {
            console.log(data,"then")

            this.setState={
                data_new:"ed"
            }
        })
        .catch(error => {
        });
    }
  
    render() {
        // console.log(this.state.data_new,"render");
        return(

            <div>
           {
        console.log(this.state.data_new,"this data new`1")}
             {this.state.data_new.map((ele,index)=>{
                    return <p key={index}>{ele.name}</p> 
                })}
            </div>
        )
    }
  }

  export default Component