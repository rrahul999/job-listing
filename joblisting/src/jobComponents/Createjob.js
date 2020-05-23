import React, { Component } from 'react'
import CheckBox from './Checkbox'


class Createjob extends Component {
    constructor(props) {
        super(props)

        this.state = {
            JobTitle: '',
            Industry: '',
            Experience: '2 - 3 years',
            Profile: [
                { id: 1, value: "Frontend", isChecked: false },
                { id: 2, value: "Backend", isChecked: false },
                { id: 3, value: "Full Stack", isChecked: false }
            ],
            selectedOption: 'male',
        }
    }
    
    
    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheckElement = (event) => {
        let profile = this.state.Profile
        profile.forEach((perprofile) => {
            if (perprofile.value === event.target.value)
                perprofile.isChecked = event.target.checked
        })
        this.setState({ Profile: profile })
        
    }
    handleOptionChange = (e) => { 
        this.setState({
          selectedOption: e.target.value
        });
      }
    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        alert(`Job Title:${data.JobTitle}\n Industry:${this.state.Industry}\n Experience: ${data.Experience}\n Skills: ${data.Profile.value} \n selectedOption: ${data.selectedOption} `)
        
    }

    render() {
        const { JobTitle, Industry, Experience, Profile, selectedOption } = this.state
        return (
            <div className="p-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor='JobTitle'>Job Title</label>
                        <input className="col-sm-6 form-control" type="text" id="JobTitle" name="JobTitle" value={JobTitle} onChange={this.handleInput} />
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor='Industry'>Job Title</label>
                        <input className="col-sm-6 form-control" type="text" id="Industry" name="Industry" value={Industry} onChange={this.handleInput} />
                    </div>
                    <div className="form-group row">
                        <lable className="col-sm-2 col-form-label" htmlFor='Experience'>Experience</lable>
                        <select id="Experience" name="Experience" value={Experience} onChange={this.handleInput}  >
                            <option value="0 - 1 years">0 - 1 years</option>
                            <option value="2 - 3 years">2 - 3 years</option>
                            <option value="3 - 6 years">3 - 6 years</option>
                            <option value="Above 5 years">Above 5 years</option>
                        </select>
                    </div>
                    <div className=" form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="Skills">Skills</label>
                        <ul className="list-inline">
                            {
                                Profile.map((profileDetails, index) => {
                                    return (<CheckBox key={index} handleCheckbox={this.handleCheckElement} {...profileDetails} />)
                                })
                            }
                        </ul>

                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor='gender'>Gender</label>
                        <label><input type="radio" checked={selectedOption === 'male'} onChange={this.handleOptionChange} value="male" />Male </label>
                        <label><input type="radio" checked={selectedOption === 'female'} onChange={this.handleOptionChange} value="female" />Female</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Createjob


