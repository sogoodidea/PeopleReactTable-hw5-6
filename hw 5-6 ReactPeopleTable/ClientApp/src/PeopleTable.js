import React from 'react';

import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    }

    onFirstNameChange = e => {
        const personCopy = { ...this.state.person };
        personCopy.firstName = e.target.value;
        this.setState({ person: personCopy });
    }

    onLastNameChange = e => {
        const personCopy = { ...this.state.person }
        personCopy.lastName = e.target.value;
        this.setState({ person: personCopy });
    }

    onAgeChange = e => {
        const personCopy = { ...this.state.person };
        personCopy.age = e.target.value;
        this.setState({ person: personCopy });
    }

    onAddClick = () => {
        const peopleCopy = [...this.state.people];
        peopleCopy.push(this.state.person);
        const emptyPerson = {
            firstName: '',
            lastName: '',
            age: ''
        }
        this.setState({ people: peopleCopy, person: emptyPerson })
        { console.log(this.state.people) };
    }

    onClearClick = () => {
        const newArray = [];
        this.setState({ people: newArray });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>

                <PersonForm
                    person={this.state.person}
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                /><br /><br />

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>
                    </thead>
                    <tbody>
                        {this.state.people.forEach(person => <PersonRow person={person} />)}                        
                    </tbody>
                </table>
            </div>);
    }
}

export default PeopleTable;
//{this.state.people.map(person, i => <PersonRow person={person} key={i} />)}