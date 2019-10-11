import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ToDoListService from '../service/ToDoListService';
class ToDoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate : '',
            isDone : ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        console.log(this.state.id)
        if (this.state.id == -1) {
            return
        }

        ToDoListService.retrieveListById(this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: response.data.targetDate,
                status: response.data.isDone
            }))
    }

    onSubmit(values) 
    {
        let username1 = 'user'
        let course = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate,
            isDone: values.status,
            username: username1
        }

                if (this.state.id == -1) {
                    ToDoListService.createNewList(course)
                        .then(() => this.props.history.push('/todo'))
                } else {
                    ToDoListService.updateListById(this.state.id, course)
                        .then(() => this.props.history.push('/todo'))
                }
        console.log(course);
    }


    validate(values) {
    let errors = {}
    if (!values.description) {
        errors.description = 'Enter a Description'
    }
    if(!values.targetDate)
    {
        errors.targetDate = 'Enter a Date In YYYY-DD-MM format'
    }
    if(!values.status)
    {
        errors.status='Enter A Current Status'
    }
    return errors
    }


    render() {

    let { id,description,targetDate,status } = this.state

    return (
        <div>
            <h3>Update To-do List</h3>
            <div className="container">
                <Formik
                    initialValues={{id,description,targetDate,status }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div"
                                className="alert alert-warning" />
                                <ErrorMessage name="targetDate" component="div"
                                className="alert alert-warning" />
                                <ErrorMessage name="status" component="div"
                                className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                <label>TargetDate</label>
                                <Field className="form-control" type="text" name="targetDate" />
                                </fieldset>
                                <fieldset className="form-group">
                                <label>Status</label>
                                <Field className="form-control" type="text" name="status" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
    )
}
}

export default ToDoComponent