import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>

            <div className="navBar">

                <div className='return-home' style={{ display: "flex", alignItems: "center" }}>
                    <img onClick={() => navigate("/")} className='videocall-image' srcSet='/m-videocall.png' alt="video-call-img" />
                    {/* <h2 onClick={() => navigate("/")}>   Apna Video Call</h2> */}
                    {/* <h2 onClick={() => navigate("/")}>VideoCall</h2> */}
                    <h2 onClick={() => navigate("/")}>DVC</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={
                        () => {
                            navigate("/history")
                        }
                    }>
                        <RestoreIcon />
                    </IconButton>
                    <p  onClick={
                        () => {
                            navigate("/history")
                        }
                    }>History</p>

                    <Button className='btn-logout' onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>
                        Logout
                    </Button>
                </div>


            </div>


            <div className="meetContainer">
               
                <div className="leftPanel">
                    <div>
                         {/* <p>DVC(Dheeraj Video Call)</p> */}
                        <h2 className='txt-vdo'>Providing Quality Video Call Just Like Quality Education</h2>

                        <div style={{ display: 'flex', gap: "10px" }}>

                            <TextField className='meet-code' onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    {/* <img srcSet='/logo3.png' alt="video-call-img" /> */}
                    <img srcSet='../../public/vdo2.png' alt="videocall-img" />
                </div>
            </div>
        </>
    )
}


export default withAuth(HomeComponent)