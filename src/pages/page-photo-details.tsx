import { useParams } from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import type { Photo } from "../contexts/photos/models/photo";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";
import ImagePreview from "../components/image-preview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";

export default function PagePhotoDetails() {
    const { id } = useParams();

    // Solely for mocking this page
    const isLoadingPhoto = false;
    const photo = {
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
    } as Photo;

    return (
        <Container>
            <header className="flex items-center justify-between gap-8 mb-8">
                {!isLoadingPhoto ? (
                    <Text as="h2" variant="heading-large">
                        {photo?.title}
                    </Text>
                ) : (
                    <Skeleton className="w-48 h-8" />
                )}

                <PhotosNavigator loading={isLoadingPhoto} />
            </header>

            <div className="grid grid-cols-[21rem_1fr] gap-24">
                <div className="space-y-3">
                    {!isLoadingPhoto ? (
                        <>
                            <ImagePreview
                                src={`/images/${photo?.imageId}`}
                                title={photo?.title}
                                imageClassName="h-84"
                            />

                            <Button
                                variant="destructive"
                            >
                                Excluir
                            </Button>
                        </>
                    ) : (
                        <>
                            <Skeleton className="h-84" />

                            <Skeleton className="h-7 w-24" />
                        </>
                    )}
                </div>

                <div className="py-3">
                    <Text as="h3" variant="heading-medium" className="mb-6">
                        Albuns
                    </Text>

                    <AlbumsListSelectable
                        photo={photo}
                        albums={photo.albums}
                        loading={isLoadingPhoto}
                    />
                </div>
            </div>
        </Container >
    );
}