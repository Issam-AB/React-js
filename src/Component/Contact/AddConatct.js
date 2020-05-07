import React, { Component } from 'react'

class AddConatct extends Component {
    state = {
        name :'',
        tele :'',
        email:''
    }
    onChangeInput = (e) => this.setState({[e.target.name ]: e.target.value})
    submit = e =>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        const {name,tele,email} = this.state ;
        return (
        <form onSubmit ={this.submit}>
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
export default AddConatct ;