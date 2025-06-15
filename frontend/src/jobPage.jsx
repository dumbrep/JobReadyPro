import React, { useRef, useState , useEffect } from "react";
import { div, exp } from "three/tsl";
import { NavLink } from "react-router-dom";
import Backtbtn from "./back";
import axios from "axios";
import "./jobPage.css"

function Jobs(){
    const [jobs,setJobs] = useState([]);
    const [isJobs,setIsJobs] = useState()

    async function sendResume(event){
       const  file = event.target.files[0];
       const formdata = new FormData();
       formdata.append("resume",file);

       const response = await axios.post("https://jobreadypro-818388111738.asia-south1.run.app/jobSearch",formdata,
        {
            headers : {
                "Content-Type": "multipart/form-data",
            }
        }

        
       )
       if (response.data.jobs.length > 0) {
        setJobs(response.data.jobs);
        setIsJobs(""); // Clear warning message
        } else {
        setJobs([]);
        setIsJobs("Sorry, No jobs available right now. Please try again later.");
        }

        
    }
    

    return(
        <div className="jobs">
             <div className="back">             
                <NavLink to="/"><Backtbtn /></NavLink>
            </div>
            <div className="jobs_title">
                <span>
                <h1>FIND JOBS USING AI</h1>
                </span>

            </div>   
                
            
            <div className="resume">
                    <label>Upload Resume (PDF):</label>
                    <input type="file"  accept="application/pdf" onChange={sendResume} />
            </div>

            <div className="warning">{isJobs}</div>
            <div className="cards">
            {              
                jobs.map((job)=>(
                    <div className="card">
                        <div className="card_title">
                            <img src= {job.employer_logo} alt="logo" />
                            <span><a href= {job.employer_website} target="_blank">{job.employer_name}</a></span>
                        </div>
                        <p>Role : {job.job_title}</p>

                        <p>Location : {job.job_location}</p>
                        <div className="apply">
                            <a href={job.job_apply_link} target="_blank"><button className="jobsApplyButton">Apply</button></a>
                        </div>
                    </div>
                )           
            )
        
        }
            
            </div>
            <div className="jobInstrction">
                <p>Note : This may take few minutes after resume is uploaded</p>
            </div>
            
        </div>
    )
}

export default Jobs