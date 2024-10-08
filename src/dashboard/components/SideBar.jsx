import { useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useFetchData } from "../../hooks/useFetchData";
import { MessageCard } from "./MessageCard";
import { useAxiosPost } from "../../hooks/usePostAxios";

export const SideBar = () => {
    const url = `${import.meta.env.VITE_API_URL}/messages`;
    const { fetchData, data: responseFecth } = useFetchData();
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            message: ''
        }
    });
    const { postData, data: response } = useAxiosPost();

    useEffect(() => {
        const fetchMessageData = async () => {
            await fetchData(`/messages/class/1`);
        };

        fetchMessageData();
    }, []);

    const onSubmit = async (data) => {
        const { message } = data;
        const now = new Date();
        await postData(url, { message, date: now, id_class: 1 });
        reset({
            message: ""
        });
    };

    return (
        <Box
            component="div"
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxHeight: '90vh', // Set a maximum height
                padding: 2,
                backgroundColor: '#f5f5f5', // Optional background color
                borderRadius: '5px' // Optional border radius
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    overflowY: 'auto', // Allow vertical scrolling for messages
                    marginBottom: 2 // Add margin to separate from the button
                }}
            >
                <Typography variant="h6" sx={{ paddingLeft: 1, paddingTop: 2 }}>
                    Mensajes
                </Typography>

                {responseFecth&& responseFecth.data && responseFecth.data.length > 0 && responseFecth.data.map(message => (
                    <MessageCard key={message.id} message={message} />
                ))}
            </Box>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', padding: 0 }}>
                <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enviar un mensaje"
                            variant="outlined"
                            size="small"
                            sx={{ marginRight: 1, width: "80%" }}
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">Enviar</Button>
            </form>
        </Box>
    );
};