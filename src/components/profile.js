import React from 'react';
import './profile.css';
import profileImage from '../images/profileImage.png';
import gmail from '../images/icons/gmail.png';
import linkedin from '../images/icons/linkedin.png';
import twitter from '../images/icons/twitter.png';
import result from '../images/result.png';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Profile = () => {
    const percentage = 100;
    const profileContent = "Hey, I am Dr. Pt Shweta Sharma"
    const usingArrayFrom = Array.from(profileContent);
    return (
        <div className='mainscreen' style={{ display: "flex" }}>
            <div className='sideNav'>
                <img style={{ width: "40%", borderRadius: "50%" }} src={profileImage} alt='profileImage'></img>
                <div style={{ color: "#fafafc", marginTop: "10%", fontSize: "15px" }}>Dr. Pt Shweta Sharma</div>
                <div style={{ color: "#8c8c8e", marginTop: "12%", fontSize: "15px" }}>BPT, MPT ( cardio-pulmonary ), DCPT</div>
                <div style={{ color: "#8c8c8e", fontSize: "15px" }}>Consultant Physiotherapist</div>
                <hr style={{ width: "100%", backgroundColor: '#8c8c8e', height: '1px', border: 'none', marginTop: "2rem" }}></hr>
                <div style={{ width: "100%", display: "flex", marginTop: "1rem", backgroundColor: "#191923", padding: "4%" }}>
                    <div style={{ width: '50%', display: "flex", flexDirection: "column", color: "white" }}>
                        <div style={{ margin: "2%", fontSize: "15px" }}>Residence</div>
                        <div style={{ margin: "2%", fontSize: "15px" }}>City</div>
                        <div style={{ margin: "2%", fontSize: "15px" }}>Age</div>
                    </div>
                    <div style={{ width: '50%', display: "flex", flexDirection: "column", justifyContent: "right", alignItems: "end", color: "#8c8c8e" }}>
                        <div style={{ margin: "2%", fontSize: "15px" }}>India</div>
                        <div style={{ margin: "2%", fontSize: "15px" }}>Delhi</div>
                        <div style={{ margin: "2%", fontSize: "15px" }}>24</div>
                    </div>
                </div>
                <hr style={{ width: "100%", backgroundColor: '#8c8c8e', height: '1px', border: 'none', marginTop: "2rem" }}></hr>
                <div style={{ display: 'flex', marginTop: "12%", justifyContent: "center", alignItems: "center" }}>
                    <div className='progressBar'>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        <div className='text'>English</div>
                    </div>
                    <div className='progressBar'>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        <div className='text'>Hindi</div>
                    </div>
                </div>
                <div style={{ border: "1px solid #8c8c8e", width: "100%", marginTop: "4rem", textAlign: 'center' }}>
                    <img style={{ margin: "4%" }} src={gmail}></img>
                    <img style={{ margin: "4%" }} src={linkedin}></img>
                    <img style={{ margin: "4%" }} src={twitter}></img>
                </div>

            </div>
            <div className='header'>
                <div className='innerContent'>
                    <div className='profileContent'>
                        <div style={{ width: '69%' }}>
                            <div class="typewriter">
                                <h1>Hey! This is Dr. Pt Shweta Sharma.</h1>
                            
                            </div>
                        </div>
                        <div style={{ width: '30%', textAlign:'right' }}>
                            <img style={{ width: "100%", marginTop:"-40%" }} src={result} alt="image"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}