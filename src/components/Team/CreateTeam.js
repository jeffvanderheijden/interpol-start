import React, { useState, useEffect, useRef } from "react";
import TakePhoto from "./../../assets/images/take-photo.png";
import SuccessScreen from "./../SuccessScreen/SuccessScreen";
import "./CreateTeam.css";

const CreateTeam = ({
    windows,
    setWindows
}) => {
    const [camera, setCamera] = useState(false);
    const [streaming, setStreaming] = useState(false);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [image, setImage] = useState(null);
    const [teamSuccessfullyCreated, setTeamSuccessfullyCreated] = useState(false);
    const cameraRef = useRef(null);
    const canvasRef = useRef(null);
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const takePhotoRef = useRef(null);
    const finalImageRef = useRef(null);

    const api = "https://api.jeffvanderheijden.nl/api";

    const getVideoStream = async () => {
        try {
            clearPicture();
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            if (videoRef && videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.addEventListener("loadedmetadata", () => {
                    videoRef.current.play();
                });
            } else {
                return;
            }
        } catch (err) {
            console.error(err)
        }

        if (videoRef && videoRef.current) {
            videoRef.current.addEventListener("canplay", () => {
                if (!streaming) {
                    setHeight(videoRef.current.videoHeight / (videoRef.current.videoWidth / width));

                    // Firefox currently has a bug where the height can't be read from
                    // the video, so we will make assumptions if this happens.

                    if (isNaN(height)) {
                        setHeight(width / (4 / 3));
                    }

                    videoRef.current.setAttribute("width", width);
                    videoRef.current.setAttribute("height", height);
                    canvasRef.current.setAttribute("width", width);
                    canvasRef.current.setAttribute("height", height);
                    setStreaming(true);
                }
            }, false);
        }
    }

    function clearPicture() {
        if (canvasRef && canvasRef.current && photoRef && photoRef.current) {
            const context = canvasRef.current.getContext("2d");
            context.fillStyle = "#000";
            context.fillRect(0, 0, canvasRef.current.offsetHeight, canvasRef.current.offsetWidth);

            const data = canvasRef.current.toDataURL("image/png");
            photoRef.current.setAttribute("src", data);
        }
    }

    const takePicture = (e) => {
        if (canvasRef && canvasRef.current && photoRef && photoRef.current && videoRef && videoRef.current && finalImageRef && finalImageRef.current) {
            const context = canvasRef.current.getContext("2d");
            if (width && height) {
                canvasRef.current.width = width;
                canvasRef.current.height = height;
                context.drawImage(videoRef.current, 0, 0, width, height);

                const data = canvasRef.current.toDataURL("image/png");
                setImage(data);
                photoRef.current.setAttribute("src", data);
                finalImageRef.current.setAttribute("src", data);
            } else {
                clearPicture();
            }
        }
        e.preventDefault();
    }

    const createTeam = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', e.target.elements.teamName.value);
        formData.append('class', e.target.elements.klas.value);
        const students = [
            {
                name: e.target.elements.student1.value,
                number: e.target.elements.student1_number.value
            },
            {
                name: e.target.elements.student2.value,
                number: e.target.elements.student2_number.value
            },
            {
                name: e.target.elements.student3.value,
                number: e.target.elements.student3_number.value
            },
            {
                name: e.target.elements.student4.value,
                number: e.target.elements.student4_number.value
            }
        ];
        formData.append('students', JSON.stringify(students));
        
        try {
            const response = await fetch(`${api}/create-team`, {
                method: 'POST',
                body: formData,
            });
            const newTeam = await response.text();
            console.log(JSON.parse(newTeam).message);
            if (JSON.parse(newTeam).message) {
                setTeamSuccessfullyCreated(true);
                // Set initial points for the team on completion
                // ======================================
                // TODO: Set points based on min points and time spend on the challenge
                // ======================================
                const setPoints = async () => {
                    const formData = new FormData();
                    formData.append('group_id', JSON.parse(newTeam).message);
                    formData.append('challenge_id', 4);
                    formData.append('completed', 1);
                    formData.append('points', Math.floor(Math.random() * 200) + 100);
                    try {
                        const response = await fetch(`${api}/set-challenge-points`, {
                            method: 'POST',
                            body: formData
                        });
                        const success = await response.text()
                        console.log(success);
                    } catch (error) {
                        console.error('Error setting points:', error);
                    }
                
                }
                setPoints();
            }
        } catch (error) {
            console.error('Error creating team:', error);
        }
    };

    useEffect(() => {
        if (windows && teamSuccessfullyCreated) {
            const hideCreateTeam = setTimeout(() => {
                // Close the team creation window
                Object.assign(
                    // target object which will be mutated and also is the return value.
                    windows.find((mutate) => mutate.name === "CreateTeam"),
                    // the source objects which properties will be assigned to the target object.
                    {
                        open: false,
                        invisible: true,
                        selected: false
                    }
                );
                const newWindows = [...windows]; // Because we return a mutated object, we need to create a new array
                setWindows(newWindows);
            }, 4000);
            return () => { clearTimeout(hideCreateTeam) };
        }        
    }, [teamSuccessfullyCreated]);

    useEffect(() => {
        camera && getVideoStream();
    }, [camera]);

    useEffect(() => {
        setWidth(200);
    }, []);

    return (
        <div id="createTeam">
            <h1>Create Team</h1>
            <p>
                You are now going to work in a group of 4 students to unmask the hacker. 
            </p>
            <div className="teamImage" onClick={() => { setCamera(true) }} onKeyDown={() => { setCamera(true) }}>
                <img src={TakePhoto} ref={finalImageRef} alt="Team" />
            </div>
            <form onSubmit={(e) => { createTeam(e) }}>
                <input type="hidden" id="image" name="image" value={image} required />
                <input type="text" id="teamName" name="teamName" placeholder="Team naam" required />
                <input type="text" id="klas" name="klas" placeholder="Klas" required />
                <div>
                    <label>
                        <span>Student 1</span>
                        <input className="half" type="text" id="student1" name="student1" placeholder="Student voornaam" required />
                    </label>
                    <input className="half" id="student1_number" name="student1_number" type="number" pattern="\d*" minLength="6" maxLength="6" placeholder="Student nummer" required />
                </div>
                <div>
                    <label>
                        <span>Student 2</span>
                        <input className="half" type="text" id="student2" name="student2" placeholder="Student voornaam" required />
                    </label>
                    <input className="half" type="number" id="student2_number" name="student2_number" placeholder="Student nummer" pattern="\d*" minLength="6" maxLength="6" required />
                </div>
                <div>
                    <label>
                        <span>Student 3</span>
                        <input className="half" type="text" id="student3" name="student3" placeholder="Student voornaam" required />
                    </label>
                    <input className="half" type="number" id="student3_number" name="student3_number" placeholder="Student nummer" pattern="\d*" minLength="6" maxLength="6" required />
                </div>
                <div>
                    <label>
                        <span>Student 4</span>
                        <input className="half" type="text" id="student4" name="student4" placeholder="Student voornaam" required />
                    </label>
                    <input className="half" type="number" id="student4_number" name="student4_number" placeholder="Student nummer" pattern="\d*" minLength="6" maxLength="6" required />
                </div>
                <div className="buttonWrapper">
                    {!teamSuccessfullyCreated && (
                        <button type="submit" className="btn"><span>Create team</span></button>
                    )}
                </div>
            </form>
            {camera && (
                <div className="camera" ref={cameraRef}>
                    <video ref={videoRef} id="video">Video stream not available.</video>
                    <div className="buttonWrapper">
                        <button onClick={(e) => { takePicture(e) }} ref={takePhotoRef} type="button" id="startbutton" className="btn"><span>Take photo</span></button>
                        <button onClick={() => { setCamera(false) }} type="button" id="savebutton" className="btn"><span>Save photo</span></button>
                    </div>
                    <div className="output">
                        <div className="imgWrapper">
                            <img ref={photoRef} id="photo" alt="Team image" />
                        </div>
                        <canvas id="canvas" ref={canvasRef} />
                    </div>
                </div>
            )}
            {teamSuccessfullyCreated && <SuccessScreen />}
        </div>
    )
}

export default CreateTeam;