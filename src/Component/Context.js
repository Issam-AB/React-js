import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case 'DELETE_CONATCT':
            return{
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
            default:
                return(state);
    }
}

export  class Provider extends Component {
    state = {
        contacts : [
            {id:1, name:"Issam aboulfadl",tele:"0614537823",email:"issam12@gmail.com"},
            {id:2, name:"Rachid Abouham",tele:"0614754999",email:"Rachid.aboha@gmail.com"},
            {id:3, name:"Abderahim Bourdim",tele:"061454623",email:"Abdo.B@gmail.com"}
        ],
        dispatch: action =>this.setState(state => reducer(state,action))
      }
    render() {
        
        return (
           <Context.Provider value={this.state}>
            {this.props.children}
           </Context.Provider>
        )
    }
}
export const Consomer = Context.Consumer ;
