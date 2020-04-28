import React, { useState } from 'react';
import Container, { StyledWriteBox as Box } from '../../../common/StyledContainer/StyledContainer';


export default ({ myProfile, uploadPhoto }) => {
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState(undefined);
    const imageFiles = React.createRef();

    const handleClick = () => {
        if (imageFiles.current.files[0]) {
            if (error) setError(undefined);
            const formData = new FormData();
            formData.append('image', imageFiles.current.files[0]);
            uploadPhoto(formData).then(() => {
                setEditMode(false);
            });
        } else setError('Input your image first');
    }

    return myProfile
        ? <>
            {!editMode
                ? <div>
                    <span onClick={() => setEditMode(true)}>Upload photo</span>
                </div>
                : <Box>
                    <Container>
                        <input type="file" ref={imageFiles} />
                        <button onClick={handleClick}>Upload photo</button>
                        {error && <span>{error}</span>}
                        <button onClick={() => {
                            if (error) setError(undefined);
                            setEditMode(false)
                        }}>Cancel</button>
                    </Container>
                </Box>}
        </>
        : null
}