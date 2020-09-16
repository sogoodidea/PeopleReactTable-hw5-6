import React from 'react';

class PersonForm extends React.Component {
    render() {
        return (
            <div style={{marginTop: 60, textAlign: 'center'}}>
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <input className="form-control input-lg" type="text" placeholder="First Name"
                            value={this.props.person.firstName}
                            onChange={this.props.onFirstNameChange} /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <input className="form-control input-lg" type="text" placeholder="Last Name"
                            value={this.props.person.lastName}
                            onChange={this.props.onLastNameChange} /><br />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <input className="form-control input-lg" type="text" placeholder="Age"
                            value={this.props.person.age}
                            onChange={this.props.onAgeChange} /><br />
                    </div>
                </div>
                <div className="offset-md-4 col-md-4">
                    <button className="btn btn-primary btn-lg btn-block"
                        onClick={this.props.onAddClick}
                    >Add Person</button><br />
                </div>
                <div className="offset-md-4 col-md-4">
                    <button className="btn btn-primary btn-lg btn-block"
                        onClick={this.props.onClearClick}
                    >Clear Table</button>
                    </div>
            </div>
        );
    }
}

export default PersonForm;


