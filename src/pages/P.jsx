import React, { useEffect, useState } from 'react';

const P = () => {
    const getData = async () => {
        try {
            const formData = new FormData();
            formData.append('type', 'get');
            await fetch("https://portafolio.xantheapp.com/api/feria2024/",{
            // await fetch("http://localhost/promotions/backend/", {
                method: 'POST',
                body: formData
            }).then(res => res.text())
                .then(r => {
                    console.log(r)
                })
                .catch(err => console.log(err));
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <h1>Index</h1>
        </div>
    );
}

export default P;
