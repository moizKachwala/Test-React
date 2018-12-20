import React, {Component} from 'react';

class StudentPage extends Component {

    constructor() {
        super();
        this.renderRows = this.renderRows.bind(this);
    }

    componentDidMount() {
        const {actions: {studentList}} = this.props;
        studentList();
    }

    renderRows() {
        const {students} = this.props;
        return students.map(({id, name}) => (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
            </tr>
        ));
    }

    render() {
        return (
            <table>
                {this.renderRows()}
            </table>
        );
    }
}

export default StudentPage;