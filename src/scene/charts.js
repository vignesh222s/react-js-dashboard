import React from 'react'
import BreadCrumb from '../components/breadcrumb/breadcrumb'
import { Card,Row,Col } from 'antd';
import Item from 'antd/lib/list/Item';
import axios from 'axios';
const { Meta } = Card;
class Charts extends React.Component {
constructor(){
    super()
    this.state={
        persons:[
            // {title:"sathish",img:"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"},
            // {title:"sathish",img:"https://homepages.cae.wisc.edu/~ece533/images/baboon.png"},
            // {title:"sathish",img:"https://homepages.cae.wisc.edu/~ece533/images/cat.png"}

        ]
}}
    
 async componentDidMount() {
  let res= await axios.get(`https://jsonplaceholder.typicode.com/users`);
   
        const persons = res.data;
        this.setState({ persons });
    
  }
    render() { 
        
        let persons=this.state.persons.map((item)=>{
            
            return(
                <div>
               <Col span={8}>
           <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://loremflickr.com/g/320/240/paris"/>} >
              <Meta
              title={item.title}
               description="www.instagram.com"
 />
  </Card></Col>
  
           </div>
            )
        })
        return (
            <div className="content-wrapper">
                <div className="container-fluid">
                    <BreadCrumb parentLink="/" parentTitle="Dashboard" leaf="Charts" />
                    <div className="main-body">
 <Row  type="flex"justify="space-between">                       {/* <h2>Welcome To Charts</h2> */}
                        
{persons}
</Row>

 

                    </div>
                </div>

            </div>
        );
    }
}

export default Charts 