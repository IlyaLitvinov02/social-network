import React, { useEffect } from 'react';




export default ({title, children}) => {
    useEffect(() =>{
        const originalTitle = document.title;

        document.title = title;

        return () => document.title = originalTitle; 
    }, [title])

    return (
        <>
            {children}        
        </>
    );
}