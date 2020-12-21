import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';


function Searchbar({ onFormSubmit }) {
    const [searchValue, setSearchValue] = useState("");
    const handleSubmit = (event) => {
        onFormSubmit(searchValue);
        event.preventDefault();
    }
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <Paper elevation={6} style={{ padding: '25px', alignItems:"center" }}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth placeholder="Search..." onChange={handleChange} />

            </form>
        </Paper>
    );
}

export default Searchbar;