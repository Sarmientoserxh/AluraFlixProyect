import { useState, useEffect } from "react";
import {
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Box,
    Typography,
} from "@mui/material";

const VideoForm = ({ videoData, categories, onClose, onSubmit }) => {
    const [form, setForm] = useState({
        name: "",
        imagen:"",
        videoLink: "",
        description: "",
        category: "",
        frame:""
    });

    useEffect(() => {
        if (videoData) {
            setForm({
                name: videoData.name,
                imagen:videoData.imagen,
                videoLink: videoData.videoLink,
                description: videoData.description || "",
                category: videoData.category.name,
                frame:videoData.frame
            });
        }
    }, [videoData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        onClose();
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                backgroundColor: "#242424",
                color: "#fff",
                padding: 3,
                borderRadius: 2,
                width: "100%",
                maxWidth: 600,
                mx: "auto",
            }}
        >
            <Typography variant="h4" sx={{ color: "#2271d1", fontWeight: "bold" }}>
                {videoData ? "Editar Video" : "Crear Video"}
            </Typography>

            {/* Nombre del video */}
            <TextField
                label="Nombre"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{
                    style: { color: "#fff" },
                }}
                InputProps={{
                    style: { color: "#fff" },
                }}
            />
            <TextField
                label="Enlace de la imagen"
                name="imagen"
                value={form.imagen}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{
                    style: { color: "#fff" },
                }}
                InputProps={{
                    style: { color: "#fff" },
                }}
            />

            {/* Enlace del video */}
            <TextField
                label="Enlace del video"
                name="videoLink"
                value={form.videoLink}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{
                    style: { color: "#fff" },
                }}
                InputProps={{
                    style: { color: "#fff" },
                }}
            />

            <TextField
                label="Enlace del codigo embebido"
                name="frame"
                value={form.frame}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{
                    style: { color: "#fff" },
                }}
                InputProps={{
                    style: { color: "#fff" },
                }}
            />

            {/* Descripción */}
            <TextField
                label="Descripción"
                name="description"
                value={form.description}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                InputLabelProps={{
                    style: { color: "#fff" },
                }}
                InputProps={{
                    style: { color: "#fff" },
                }}
            />

            {/* Categoría */}
            <FormControl fullWidth variant="outlined" required>
                <InputLabel sx={{ color: "#fff" }}>Categoría</InputLabel>
                <Select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    label="Categoría"
                    sx={{
                        "& .MuiOutlinedInput-input": { color: "#fff" },
                        "& .MuiSvgIcon-root": { color: "#fff" },
                    }}
                >
                    <MenuItem value="" disabled>
                        Selecciona una categoría
                    </MenuItem>
                    {categories.map((cat) => (
                        <MenuItem key={cat.name} value={cat.name}>
                            {cat.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Botones */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                    variant="contained"
                    color="error"
                    onClick={onClose}
                    sx={{ width: "48%" }}
                >
                    Cancelar
                </Button>
                <Button type="submit" variant="contained" color="primary" sx={{ width: "48%" }}>
                    Guardar
                </Button>
            </Box>
        </Box>
    );
};

export default VideoForm;
