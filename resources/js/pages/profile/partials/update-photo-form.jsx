import {useRef, useState} from "react";
import {useForm, usePage} from "@inertiajs/react";
import {Button} from "@/components/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/avatar";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/card";
import {LoaderCircleIcon, UserIcon} from "lucide-react";
import {toast} from "sonner";
import {Error} from "@/components/input.jsx";

export default function UpdatePhotoForm() {
    const user = usePage().props.auth.user;
    const fileInput = useRef();

    const {setData, post, errors, processing} = useForm({
        photo: user.photo || "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("photo.store"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success("Photo uploaded.");
            },
        });
    };
    const [photo, setPhoto] = useState(user.photo);

    function handleUpload(e) {
        const file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            setPhoto(reader.result);
            setData("photo", file);
        };
        reader.readAsDataURL(file);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile Photo</CardTitle>
                <CardDescription>Update your profile photo.</CardDescription>
            </CardHeader>

            <form onSubmit={submit}>
                <CardContent className="flex items-center gap-2">
                    <input
                        ref={fileInput}
                        type="file"
                        id="photo"
                        className="hidden"
                        onChange={handleUpload}
                        aria-label="Photo"
                    />
                    <Avatar
                        className="w-16 h-16 border-2"
                        onClick={() => fileInput.current.click()}
                    >
                        <AvatarImage src={photo}/>
                        <AvatarFallback>
                            <UserIcon className="w-12 h-12"/>
                        </AvatarFallback>
                    </Avatar>
                    <Error message={errors.photo}/>
                </CardContent>

                <CardFooter>
                    <Button type="submit" disabled={processing}>
                        {processing && (
                            <LoaderCircleIcon className="w-4 h-4 mr-2 animate-spin"/>
                        )}
                        Save
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
