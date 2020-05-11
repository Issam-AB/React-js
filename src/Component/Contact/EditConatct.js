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
    
    async componentDidMount(){
        const id = this.props.match.params.id ;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        this.setState({
            name: res.data.name,
            phone: res.data.phone,
            email:res.data.email
        })
    } 

    onChangeInput = (e) => this.setState({[e.target.name ]: e.target.value})

    submit = async (dispatch,size,e) =>{
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
        const UpContact = {
            name,
            phone,
            email 
        }
        const id = this.props.match.params.id ;
        try{
            const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,UpContact)
            dispatch({
                type : 'UPDATE_CONATCT' ,
               payload : res.data
            })    
        }
        catch(ex){
           console.log(ex)
        }
       
      
        this.setState({
            name :'',
            phone :'',
            email:'',
            error : {}
        })
        
     this.props.history.push('/');   
      
    }
    render() {
const {name,phone,email,errors} = this.state ;
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
                <h4 class="card-title">Edit Contact</h4>
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
                value={phone} 
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
                <button className="btn btn-danger btn-block">Update Conatct</button>
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