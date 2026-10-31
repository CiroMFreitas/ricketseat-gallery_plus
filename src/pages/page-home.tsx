import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photo-list";

export default function PageHome() {
    return (
        <Container className="grid gap-6">
            <AlbumsFilter albums={[
                { id: "natureza", title: "natureza" },
                { id: "casa", title: "casa" },
                { id: "viagem", title: "viagem" },
                { id: "noite", title: "noite" }
            ]} className="mb-9" loading />

            <PhotosList
                photos={[
                    {
                        id: "123",
                        title: "Olá mundo!",
                        imageId: "...",
                        albums: [
                            {
                                id: "natureza",
                                title: "natureza"
                            },
                            {
                                id: "casa",
                                title: "casa"
                            },
                            {
                                id: "viagem",
                                title: "viagem"
                            }
                        ]
                    },
                    {
                        id: "321",
                        title: "HMM",
                        imageId: "...",
                        albums: []
                    }
                ]}
            />

            <PhotosList
                photos={[]}
                loading
            />

            <PhotosList
                photos={[]}
            />
        </Container>
    );
}