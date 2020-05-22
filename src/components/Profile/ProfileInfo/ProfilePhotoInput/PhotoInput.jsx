import React, { useState } from 'react';
import { Container, Button } from '../../../common/Styled/Styled';
import s from './ProfilePhoto.module.css';


export default ({ isOwner, uploadPhoto }) => {
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

    return isOwner
        ? <>
            {!editMode
                ? <div>
                    <Button className={s.uploadPhotoButton} onClick={() => setEditMode(true)}>Upload photo</Button>
                </div>
                : <Container>
                    <input type="file" ref={imageFiles} />
                    <button onClick={handleClick}>Upload photo</button>
                    {error && <span>{error}</span>}
                    <button onClick={() => {
                        if (error) setError(undefined);
                        setEditMode(false)
                    }}>Cancel</button>
                </Container>}
        </>
        : null
}