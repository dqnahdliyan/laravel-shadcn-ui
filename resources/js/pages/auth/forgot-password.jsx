import {useForm} from '@inertiajs/react';
import GuestLayout from "@/layouts/guest-layout";
import {Button} from '@/components/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader} from '@/components/card';
import {Error, Input} from '@/components/input';

export default function ForgotPassword({status}) {
    const {data, setData, post, processing, errors} = useForm({
        email: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <Card>
            <CardHeader>
                {status && <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>}
                <CardDescription>
                    Forgot your password? No problem. Just let us know your email address and we will email you a
                    password
                    reset link that will allow you to choose a new one.
                </CardDescription>
            </CardHeader>
            <form onSubmit={submit}>
                <CardContent className="space-y-2">
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoFocus
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <Error message={errors.email} className="mt-2"/>
                </CardContent>
                <CardFooter className="justify-end">
                    <Button disabled={processing}>
                        Email Password Reset Link
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

ForgotPassword.layout = page => <GuestLayout title="Forgot Password" children={page}/>
