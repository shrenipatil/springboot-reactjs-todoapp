import React, { Component } from 'react';
import ToDoListService from '../service/ToDoListService';
class ToDoListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.refreshList = this.refreshList.bind(this)
        this.deleteButtonClicked = this.deleteButtonClicked.bind(this)
        this.updateButtonClicked = this.updateButtonClicked.bind(this)
        this.addButtonClicked = this.addButtonClicked.bind(this)
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList() {
        ToDoListService.retrieveAllList()
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }

    deleteButtonClicked(id) {
    console.log(id)
    ToDoListService.deleteListById(id)
        .then(
            response => {
                console.log(response);
                this.setState({ message: `Delete of List ${id} Successful` })
                this.refreshList()
            }
        )
    }

    updateButtonClicked(id) 
    {
    console.log('update ' + id)
    let updateurl="/todo/"+id;
    this.props.history.push(updateurl)
    }

    addButtonClicked() {
    this.props.history.push('/todo/-1')
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All To Do List</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>TargetData</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.description}</td>
                                            <td>{course.targetDate}</td>
                                            <td>{course.isDone}</td>

                                            <td><button className="btn btn-success" onClick={() => this.updateButtonClicked(course.id)}>Update</button></td>

                                            <td><button className="btn btn-warning" onClick={() => this.deleteButtonClicked(course.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
            <button className="btn btn-success" onClick={this.addButtonClicked}>Add</button>
                </div>
                </div>
            </div>
        )
    }
}

export default ToDoListComponent