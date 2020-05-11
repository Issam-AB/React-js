import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case 'DELETE_CONATCT':
            return{
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
            case 'ADD_CONATCT':
            return{
                contacts: [action.payload , ...state.contacts]
            };
            case 'UPDATE_CONATCT':
                return{
                    contacts: state.contacts.map(contact => contact.id === action.payload.id ? contact = action.payload : contact) 
                };
            default:
                return(state);
    }
}

export  class Provider extends Component {
    state = {
        contacts : [
            {id:1, name:"Issam aboulfadl",phone:"0614537823",email:"issam12@gmail.com"},
            {id:2, name:"Rachid Abouham",phone:"0614754999",email:"Rachid.aboha@gmail.com"},
            {id:3, name:"Abderahim Bourdim",phone:"061454623",email:"Abdo.B@gmail.com"}
        ],
        dispatch: action =>this.setState(state => reducer(state,action))
      }
      //Executer la fin de Chargement de component 
       async componentDidMount(){
           const res = await axios.get('https://jsonplaceholder.typicode.com/users')

           this.setState({
            contacts: res.data
        })

         
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
