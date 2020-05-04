import React, { Component } from 'react'

import Contact from './Contact'

import{Consomer} from '../Context';

 class Contacts extends Component {
    
      deleteConatct(id){
         const {contacts} = this.state
         const newList = contacts.filter((contact) => contact.id !== id)
         
         this.setState({
             contacts : newList
         })
      }
    render() {
        return(
            <Consomer>
                {value =>(
                    value.contacts.map((contact) => (
                        <Contact key = {contact.id}
                         data = {contact} 
                         deleteContactFromChild=
                         {this.deleteConatct.bind(this,contact.id)}
                        />
                    ))
                )}
            </Consomer>
        )
      
            
    }
}
export default Contacts ;
