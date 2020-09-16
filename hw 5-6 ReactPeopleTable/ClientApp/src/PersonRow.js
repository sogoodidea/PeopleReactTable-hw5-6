import React from 'react';

class PersonRow extends React.Component {

    render() {
        return (            
            <div>
                {console.log('it came here')};
                <tr className={this.props.person.age >= 65 ? 'danger' : ''}>
                    {console.log( this.props.person.firstName )};
                    <td>{this.props.person.firstName}</td>
                    <td>{this.props.person.lastName}</td>
                    <td>{this.props.person.age}</td>
                </tr>
            </div>
        );
    }
}

export default PersonRow;