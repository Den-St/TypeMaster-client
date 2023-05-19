import { RatingComponent } from "../../components/Rating"
import { useRating } from "../../hooks/rating";

export const Rating = () => {
    const {users, loading} = useRating();
    return <RatingComponent users={users} loading={loading}/>
}