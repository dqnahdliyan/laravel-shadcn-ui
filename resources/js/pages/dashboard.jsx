import {Alert, AlertDescription} from "@/components/alert";
import AppLayout from "@/layouts/app-layout";

export default function Dashboard() {
    return (
        <>
            <Alert>
                <AlertDescription className="text-lg">
                    You're logged in!
                </AlertDescription>
            </Alert>
        </>
    );
}

Dashboard.layout = page => <AppLayout title="Dashboard" children={page}/>
