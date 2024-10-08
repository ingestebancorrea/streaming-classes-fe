import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

export const Modal = ({ open, handleClose, error }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <Typography variant="body1">{ error }</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    )
}
