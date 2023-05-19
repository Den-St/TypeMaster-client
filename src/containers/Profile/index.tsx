import { ProfileComponent } from "../../components/Profile"
import { useGetProfile } from "../../hooks/getProfileInfo"

export const Profile = () => {
    const {loading,err,profile} = useGetProfile();
    return <ProfileComponent profile={profile} err={err} loading={loading} />
}