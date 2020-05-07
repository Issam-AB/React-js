import React, { Component } from 'react'
import {Consomer} from '../Context'

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
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input type="text" className="form-control"
                                    name="name"
                                    defaultValue={name}
                                    onChange={this.onChangeInput}
                                    />
                                    </div>
                                <div className="form-group">
                                    <label htmlFor="">Tele</label>
                                    <input type="text" className="form-control"
                                    name="tele"
                                    defaultValue={tele}
                                    onChange={this.onChangeInput}
                                    />
                                    </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="text" className="form-control"
                                    name="email"
                                    defaultValue={email}
                                    onChange={this.onChangeInput}
                                    />
                                    </div>
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