import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Header from "../Header";
import VideoForm from "../VideoForm";
import Card from "../Card";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
`;

const CategorySection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
`;

const CategoryHeader = styled.div`
    background-color: ${({ color }) => color};
    color: #fff;
    padding: 20px 30px;
    border-radius: 8px;
    font-size: 32px;
    font-weight: bold;
`;

const VideosGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
`;

const SectionVideos = () => {
    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const videoCategory = [
        { name: "FrontEnd", color: "#6BD1FF" },
        { name: "BackEnd", color: "#00C86F" },
        { name: "Innovación y Gestión", color: "#FFBA05" }
    ];

    useEffect(() => {
        fetch("http://localhost:3001/videos")
            .then((res) => res.json())
            .then((data) => setVideos(data))
            .catch((err) => console.error("Error fetching videos:", err));
    }, []);

    const groupedVideos = videoCategory.reduce((acc, category) => {
        acc[category.name] = {
            color: category.color,
            videos: videos.filter((video) => video.category.name === category.name),
        };
        return acc;
    }, {});

    const handleNewVideo = () => {
        setCurrentVideo(null);
        setIsModalOpen(true);
    };

    const handleSubmitVideo = (formData) => {
        const method = currentVideo ? "PUT" : "POST"; // Determina si es edición o creación
        const url = currentVideo
            ? `http://localhost:3001/videos/${currentVideo.id}` // Para editar un video existente
            : "http://localhost:3001/videos"; // Para crear un nuevo video

        fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                category: { name: formData.category },
            }),
        })
            .then((res) => res.json())
            .then((updatedOrNewVideo) => {
                if (currentVideo) {
                    // Actualizar el video en la lista
                    setVideos((prev) =>
                        prev.map((video) =>
                            video.id === updatedOrNewVideo.id ? updatedOrNewVideo : video
                        )
                    );
                } else {
                    // Agregar un nuevo video a la lista
                    setVideos((prev) => [...prev, updatedOrNewVideo]);
                }
            })
            .catch((err) => console.error("Error al guardar el video:", err))
            .finally(() => setIsModalOpen(false));
    };


    const handleDelete = (id) => {
        fetch(`http://localhost:3001/videos/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((error) => {
                        throw new Error(
                            `Error al borrar el video con ID: ${id}. Detalles: ${JSON.stringify(
                                error
                            )}`
                        );
                    });
                }
                setVideos((prev) => prev.filter((video) => video.id !== id));
            })
            .catch((err) => console.error("Error deleting video:", err));
    };

    const handleEdit = (video) => {
        setCurrentVideo(video);
        setIsModalOpen(true);
    };
    return (
        <>
            <Header onNewVideo={handleNewVideo} />
            <Container>
                {Object.entries(groupedVideos).map(([categoryName, categoryData]) => (
                    <CategorySection key={categoryName}>
                        <CategoryHeader color={categoryData.color}>
                            {categoryName.toUpperCase()}
                        </CategoryHeader>
                        <VideosGrid>
                            {categoryData.videos.map((video) => (
                                <Card
                                    key={video.id}
                                    color={categoryData.color}
                                    name={video.name}
                                    link={video.videoLink}
                                    frame={video.frame}
                                    imagen={video.imagen}
                                    categoria={categoryName}
                                    onDelete={() => handleDelete(video.id)}
                                    onEdit={() => handleEdit(video)}
                                />
                            ))}
                        </VideosGrid>
                    </CategorySection>
                ))}
            </Container>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "100vh",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                    }}
                >
                    <VideoForm
                        videoData={currentVideo}
                        categories={videoCategory}
                        onClose={() => setIsModalOpen(false)}
                        onSubmit={handleSubmitVideo}
                    />
                </div>
            </Modal>
        </>
    );
};

export default SectionVideos;
