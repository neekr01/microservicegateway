import React, { Component } from 'react';

const defaultValues = {
    recipient:'',   accno:'',
    amount:'',  txndate:''
};


class home2 extends Component {
    state = { ...defaultValues }

tfchangeHandler=(evt)=>{
    let {name, value}=evt.target;
    this.setState({[name]:value});
}

submitHandler = (evt) => {
    evt.preventDefault();
// console.log({...defaultValues});
console.log(defaultValues.recipient);
console.log(defaultValues.amount);

    this.setState({...defaultValues});
    
}


    render() {
        return (
            <div>
                <div className="row">
<div className="col-md-6">
<form onSubmit={this.submitHandler}>
    <div>
        <label htmlFor="recipient">Recipient Name</label>
        <input type="text" id="recipient"
        value={this.state.recipient}
        onChange={this.tfchangeHandler}
        className="form-control" name="recipient" />
    </div>

     <div>
        <label htmlFor="accno">Account Number</label>
        <input type="text" id="accno"
        value={this.state.accno}
        onChange={this.tfchangeHandler}
        className="form-control" name="accno" />
    </div>

     <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount"
        value={this.state.amount}
        onChange={this.tfchangeHandler}
        className="form-control" name="amount" />
    </div>

     <div>
        <label htmlFor="txndate">Transaction Date</label>
        <input type="date" id="txndate"
        value={this.state.txndate}
        onChange={this.tfchangeHandler}
        className="form-control" name="txndate" />
    </div>

    <br />

    <button className="btn btn-primary">Submit</button>


</form>
</div>
<div className="col-md-6"><br/>  <br/><p>This part is intentionally left blank</p></div>


</div>
            </div>
            
        );
    }
}

export default home2;