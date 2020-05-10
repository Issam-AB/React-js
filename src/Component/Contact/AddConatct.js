import React, { Component } from 'react'
import {Consomer} from '../Context'
import TextInputGroup from '../helpers/TextInputGroup'
import axios from 'axios'

class AddConatct extends Component {
    state = {
        name :'',
        phone :'',
        email:'',
        errors:{}
    }
    onChangeInput = (e) => this.setState({[e.target.name ]: e.target.value})
    submit = (dispatch,size,e) =>{
        e.preventDefault();

        const  {name,phone,email} = this.state;

        if(name === ''){
            this.setState({errors: {name:"the name is Requiered !"}})
            return
        }
        if(phone === ''){
            this.setState({errors: {phone:"the tele is Requiered !"}})
            return
        }
        if(email === ''){
            this.setState({errors: {email:"the email is Requiered !"}})
            return
        }
        const newContact = {
            name,
            phone,
            email 
        }
        axios.post('https://jsonplaceholder.typicode.com/users',newContact)
        .then(res =>   dispatch({
            type : 'ADD_CONATCT' ,
           payload : res.data
        }))
      
        this.setState({
            name :'',
            phone :'',
            email:'',
            error : {}
        })
        
     this.props.history.push('/');   
      
    }
    render() {
const {name,tele,email,errors} = this.state ;
return(
<Consomer>
{value => {
    const{dispatch} = value ;
return (
    <form onSubmit ={this.submit.bind(this,dispatch,value.contacts.length)}>
        <div>
        <h1>Add Conatct</h1>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Add Contact</h4>
                <div class="card-text">
                <TextInputGroup 
                label="Name" 
                type="text"
                name="name" 
                value={name} 
                onChange={this.onChangeInput}    
                error={errors.name}
                />
                <TextInputGroup 
                label="Tele" 
                type="tele"
                name="phone" 
                value={tele} 
                onChange={this.onChangeInput}   
                error={errors.tele} 
                />
                <TextInputGroup 
                label="Email" 
                type="email"
                name="email" 
                value={email} 
                onChange={this.onChangeInput} 
                error={errors.email}   
                />
                <button className="btn btn-success btn-block">Add New Conatct</button>
                </div>
            </div>
        </div>
        </div>
                                                                
    </form>
    )   
}
}
</Consomer>
)
       
    }
}
export default AddConatct ;