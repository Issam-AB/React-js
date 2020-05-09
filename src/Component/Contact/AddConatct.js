import React, { Component } from 'react'
import {Consomer} from '../Context'
import TextInputGroup from '../helpers/TextInputGroup'

class AddConatct extends Component {
    state = {
        name :'',
        tele :'',
        email:''
    }
    onChangeInput = (e) => this.setState({[e.target.name ]: e.target.value})
    submit = (dispatch,size,e) =>{
        e.preventDefault();
        dispatch({
            type : 'ADD_CONATCT' ,
            payload :{
                id : size + 1,
                name : this.state.name,
                tele : this.state.tele,
                email : this.state.email 
            }
        })
        
        this.setState({
            name :'',
            tele :'',
            email:''
        })
      
    }
    render() {
        const {name,tele,email} = this.state ;
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
                                />
                                <TextInputGroup 
                                label="Tele" 
                                type="tele"
                                name="tele" 
                                value={tele} 
                                onChange={this.onChangeInput}    
                                />
                               <TextInputGroup 
                                label="Email" 
                                type="email"
                                name="email" 
                                value={email} 
                                onChange={this.onChangeInput}    
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