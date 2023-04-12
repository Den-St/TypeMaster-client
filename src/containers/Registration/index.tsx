import { RegistrationComponent } from "../../components/Registration"
import { useRegistration } from "../../hooks/registration";

export const Registration = () => {
    const {onSubmit,success,err} = useRegistration();
    return <RegistrationComponent onSubmit={onSubmit} success={success} err={err}/>
}