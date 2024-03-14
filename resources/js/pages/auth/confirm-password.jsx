import {useEffect} from 'react';
import {useForm} from '@inertiajs/react';
import GuestLayout from "@/layouts/guest-layout";
import {Card, CardContent, CardDescription, CardFooter, CardHeader} from '@/components/card';
import {Error, Input, Label} from '@/components/input';
import {Button} from '@/components/button';

export default function ConfirmPassword() {
    const {data, setData, post, processing, errors, reset} = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    function submit(e) {
        e.preventDefault();
        post(route('password.confirm'));
    };

    return (
        <Card>
            <CardHeader>
                <CardDescription>
                    This is a secure area of the application. Please confirm your password before continuing.
                </CardDescription>
            </CardHeader>
            <form onSubmit={submit}>
                <CardContent className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoFocus
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <Error message={errors.password}/>
                </CardContent>

                <CardFooter className="justify-end">
                    <Button disabled={processing}>
                        Confirm
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

ConfirmPassword.layout = page => <GuestLayout title="Confirm Password" children={page}/>
