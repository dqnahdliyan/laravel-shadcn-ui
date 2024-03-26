import AppLayout from "@/layouts/app-layout";
import UpdateProfileInformationForm from "@/pages/profile/partials/update-profile-information-form.jsx";
import UpdatePhotoForm from "@/pages/profile/partials/update-photo-form.jsx";
import UpdatePasswordForm from "@/pages/profile/partials/update-password-form.jsx";
import DeleteUserForm from "@/pages/profile/partials/delete-user-form.jsx";

export default function ProfileEdit({ mustVerifyEmail, status }) {
    return (
        <div className="mx-auto space-y-6">
            <div>
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                />
            </div>

            <div>
                <UpdatePhotoForm />
            </div>

            <div>
                <UpdatePasswordForm />
            </div>

            <div>
                <DeleteUserForm />
            </div>
        </div>
    );
}

ProfileEdit.layout = (page) => <AppLayout title="Profile" children={page} />
