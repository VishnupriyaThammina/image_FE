import React, { useState } from 'react';
import Nav from './components/Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Create() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('userImage', image);

            // Replace 'your_server_url' with the actual URL of your Express.js server
            const response = await axios.post('https://image-api-backend.vercel.app/image/65b5e4e81e51db5cc0441784', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data); // Log the response from the server

        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <>
            <Nav />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh" }}>
                <form style={{ padding: "3vh" }}>
                    <label htmlFor="img" style={{ padding: "1vh" }}>Image: </label>
                    <input type="file" name="img" style={{ padding: "1vh" }} onChange={handleImageChange} />
                </form>
                <Link to="/view" style={{ textDecoration: "none" }}>
                    <button onClick={handleUpload} style={{ backgroundColor: "blue", padding: "1vh", border: "none", color: "white", borderRadius: "1vh", fontWeight: "500", fontSize: "2vh" }}>
                        Upload
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Create;
