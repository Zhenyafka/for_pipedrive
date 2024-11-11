import React, { useState } from 'react';
import submitForm from '../js/functions';
import '../styles/styles.css';

function App() {
    const [buttonText, setButtonText] = useState("Create job");
    const [buttonColor, setButtonColor] = useState("#ffd700"); // Initial color

    const handleSubmit = async () => {
        const success = await submitForm();

        if (success) {
            setButtonText("Request is sent");
            setButtonColor("red");
        }
    };

    return (
        <div id="app">
            <h1>Create a Job</h1>
            <div className="form-grid">
                {/* Client Details Section */}
                <div className="form-section">
                    <h2>Client details</h2>
                    <input type="text" id="firstName" placeholder="First name"/>
                    <input type="text" id="lastName" placeholder="Last name"/>
                    <input type="text" id="phone" placeholder="Phone"/>
                    <input type="email" id="email" placeholder="Email (optional)"/>
                </div>

                {/* Job Details Section */}
                <div className="form-section">
                    <h2>Job details</h2>
                    <select id="jobType">
                        <option value="">Job type</option>
                    </select>
                    <select id="jobSource">
                        <option value="">Job source</option>
                    </select>
                    <textarea id="jobDescription" placeholder="Job description (optional)"></textarea>
                </div>

                <div className="form-section">
                    <h2>Service location</h2>
                    <input type="text" id="address" placeholder="Address"/>
                    <input type="text" id="city" placeholder="City"/>
                    <input type="text" id="state" placeholder="State"/>
                    <input type="text" id="zipCode" placeholder="Zip code"/>
                    <select id="area">
                        <option value="">Area</option>
                    </select>
                </div>

                {/* Scheduled Section */}
                <div className="form-section">
                    <h2>Scheduled</h2>
                    <input type="date" id="startDate"/>
                    <input type="time" id="startTime"/>
                    <input type="time" id="endTime"/>
                    <select id="testSelect">
                        <option value="">Test select</option>
                    </select>
                </div>
            </div>

            <div className="buttons-container">
                <button
                    className="create-job"
                    style={{backgroundColor: buttonColor}}
                    onClick={handleSubmit}
                >
                    {buttonText}
                </button>
                <button className="save-info">Save info</button>
            </div>
        </div>
    );
}

export default App;
