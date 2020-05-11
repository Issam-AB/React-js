import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Contact.css'
import PropTypes from 'prop-types'
import { Consomer } from '../Context';
import axios from 'axios'
import {Link} from 'react-router-dom'



class Contact extends Component {

    state = {
        showContactTogle: true
    }
    showContact(mymessage) {
        console.log('salam :', mymessage)
        this.setState({
            showContactTogle: !this.state.showContactTogle
        })
    }
    onDeleteClick = async (id, dispatch) => {
     try{
        await axios.delete('https://jsonplaceholder.typicode.com/users/' +id)
      dispatch({
        type: 'DELETE_CONATCT',
        payload: id
    })
    }catch(ex){
      alert(ex)
    }
     

    }
    render() {
        const { id, name, phone, email } = this.props.data;
        return (
            <Consomer>
                {value => {
                    const { dispatch } = value;
                    return (

                        <div className="card text-left">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {name}  <i onClick={this.showContact.bind(this, name)}
                                       className="fa fa-sort-down " 
                                       style={{ cursor: 'pointer' }}>
                                       </i>
                                    <Link to={`/Contact/Edit/${id}`}>
                                        <i className="fa fa-pencil" style={{
                                            color:'orange',
                                            float:'right',
                                            cursor:'pointer',
                                            marginLeft:'8px'                                     
                                        }}>
                                        </i>
                                    </Link>
                                    <i onClick={this.onDeleteClick.bind(this, id, dispatch)} 
                                       style={{ color: 'red', float: "right", cursor: 'pointer' }}
                                       className="fa fa-times" aria-hidden="true"></i>
                                </h4>
                                {(this.state.showContactTogle) ? (
                                    <ul className="list-group">
                                        <li className="list-group-item">{phone}</li>
                                        <li className="list-group-item">{email}</li>
                                    </ul>
                                ) : null
                                }

                            </div>
                        </div>)

                }
                }

            </Consomer>
        )

    }
}
// Contact.defaultProps = {
//     name : "Rachid",
//     tele :"0033546776432",
//     email:"rachidabouham@gmail.com"
// }
Contact.propTypes = {
    data: PropTypes.object.isRequired,

}
export default Contact;
