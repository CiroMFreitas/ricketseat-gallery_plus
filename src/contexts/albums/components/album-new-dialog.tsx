import { Dialog, DialogClose, DialogTrigger } from "@radix-ui/react-dialog"
import { DialogBody, DialogContent, DialogFooter, DialogHeader } from "../../../components/diaolog";
import Button from "../../../components/button";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";
import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react";
import Skeleton from "../../../components/skeleton";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";

interface AlbumNewDialogProps {
    trigger: React.ReactNode
}

export default function AlbumNewDialog({
    trigger
}: AlbumNewDialogProps) {
    // Variable solely for mocking purposes
    const isLoadingPhotos = false;
    const photos: Photo[] = [
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
    ];

    function handleTogglePhoto(selected: boolean, photoId: string) {
        console.log(selected, photoId)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    Criar Album
                </DialogHeader>

                <DialogBody className="flex flex-col gap-5">
                    <InputText placeholder="Adcione um titulo" />

                    <div className="space-y-3">
                        <Text as="div" variant="label-small" className="mb-3">
                            Fotos cadastradas
                        </Text>

                        {!isLoadingPhotos && photos.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {photos.map((photo) => (
                                    <PhotoImageSelectable
                                        key={photo.id}
                                        src={`/image/${photo.imageId}`}
                                        title={photo.title}
                                        imageClassName="w-20 h-20"
                                        onSelectImage={(selected) => handleTogglePhoto(selected, photo.id)}
                                    />
                                ))}
                            </div>
                        )}

                        {isLoadingPhotos && (
                            <div className="flex flex-wrap gap-2">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Skeleton
                                        key={`photo-loading-${index}`}
                                        className="w-20 h-20 rounded-lg"
                                    />
                                ))}
                            </div>
                        )}

                        {!isLoadingPhotos && photos.length === 0 && (
                            <div className="w-full flex flex-col justify-center items-center gap-3">
                                <SelectCheckboxIllustration />
                                <Text variant="paragraph-medium" className="text-center">
                                    Nenhuma foto disponível para seleção
                                </Text>
                            </div>
                        )}
                    </div>
                </DialogBody>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">
                            Cancelar
                        </Button>
                    </DialogClose>

                    <Button>
                        Criar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}