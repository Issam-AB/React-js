import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Contact.css'
import PropTypes from 'prop-types'



class Contact extends Component {

    state = {
        showContactTogle : true 
    }
    showContact(mymessage){
        console.log('salam :', mymessage)
        this.setState({
            showContactTogle : !this.state.showContactTogle
        })
    }
    onDeleteClick = () => {
        console.log('hello delete')
        this.props.deleteContactFromChild()
    }
    render() {
       const{name,tele,email} = this.props.data;
        return (
            <div className="card text-left">
              <div className="card-body">
                <h4 className="card-title">
                    {name}  <i onClick = { this.showContact.bind(this ,name) }
                     className="fa fa-sort-down " style = {{cursor:'pointer'}}></i>
                      <i onClick = {this.onDeleteClick} style = {{color:'red', float : "right",cursor:'pointer'}} 
                     className="fa fa-times" aria-hidden="true"></i>
                    </h4>
                {(this.state.showContactTogle) ? (
                     <ul className="list-group">
                     <li className="list-group-item">{tele}</li>
                     <li className="list-group-item">{email}</li>
                 </ul>
                ) : null
                }
                
              </div>
            </div>
            
        )
    }
}
// Contact.defaultProps = {
//     name : "Rachid",
//     tele :"0033546776432",
//     email:"rachidabouham@gmail.com"
// }
 Contact.propTypes = {
     data : PropTypes.object.isRequired,
     deleteContactFromChild : PropTypes.func.isRequired
 }
export default Contact ;
