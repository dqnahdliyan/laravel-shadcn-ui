import {useEffect} from 'react';
import {Link, useForm} from '@inertiajs/react';
import GuestLayout from "@/layouts/guest-layout";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/card';
import {Button} from '@/components/button';
import {Error, Input, Label} from '@/components/input';

export default function Register() {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    function submit(e) {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>REGISTER</CardTitle>
                <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <form onSubmit={submit}>
                <CardContent className="grid gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            value={data.name}
                            autoComplete="name"
                            autoFocus
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <Error message={errors.name}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <Error message={errors.email}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <Error message={errors.password}/>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <Error message={errors.password_confirmation}/>
                    </div>
                </CardContent>
                <CardFooter className="justify-end gap-4">
                    <Link
                        href={route('login')}
                        className="text-sm text-primary/80"
                    >
                        Already registered?
                    </Link>

                    <Button type="submit" disabled={processing}>
                        Register
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

Register.layout = (page) => <GuestLayout title="Register" children={page}/>
