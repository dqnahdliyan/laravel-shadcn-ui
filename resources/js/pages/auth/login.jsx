import {useEffect} from 'react';
import {Link, useForm} from '@inertiajs/react';
import GuestLayout from "@/layouts/guest-layout";
import {Checkbox, Error, Input, Label} from '@/components/input';
import {Button} from '@/components/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/card';

export default function Login({status, canResetPassword, canRegister}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        username: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    function submit(e) {
        e.preventDefault();
        post(route('login'));
    }

    return (
        <Card>
            <CardHeader>
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                <CardTitle>LOGIN</CardTitle>
                <CardDescription>Login to your account</CardDescription>
            </CardHeader>
            <form onSubmit={submit}>
                <CardContent className="grid gap-4">
                    <div className='space-y-2'>
                        <Label htmlFor="username">Username / Email</Label>
                        <Input
                            id="username"
                            name="username"
                            value={data.username}
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setData('username', e.target.value)}
                        />
                        <Error message={errors.login}/>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="password">Password</Label>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-primary/80"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <Error message={errors.password}/>
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onCheckedChange={(e) => setData('remember', e)}
                        />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                </CardContent>
                <CardFooter className="justify-end gap-4">
                    {canRegister && (
                        <Link
                            href={route('register')}
                            className="text-sm text-primary/80"
                        >
                            Don't have an account?
                        </Link>
                    )}

                    <Button type="submit" disabled={processing}>
                        Log in
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

Login.layout = page => <GuestLayout title="Log in" children={page}/>
