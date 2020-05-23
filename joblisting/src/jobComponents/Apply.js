import React, { Component } from 'react'

class Apply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applyJob: {},
            error: null
        }
    }

    componentDidMount() {
        const applyId = this.props.match.params.id;
        const ApplyUser = "https://jsonplaceholder.typicode.com/posts/" + applyId;
        fetch(ApplyUser)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    applyJob: data
                })
            })
            .catch((error) => {
                this.setState({
                  errorMsg: 'Error retreiving data'
                })
              })
    }

    render() {
        const { applyJob } = this.state;
        return (

            <div className="p-5">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">employee_name</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={applyJob.id}>
                            <th scope="row">{applyJob.id}</th>
                            <td>{applyJob.title}</td>
                            <td>{applyJob.body}</td>

                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Apply
