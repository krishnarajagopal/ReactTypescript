import Login from "./Login";
import { ProfileProps } from "./Profile";
type PrivateProps = {
        isLoggedIn: boolean
        Component: React.ComponentType<ProfileProps>
}


const Private = ({ isLoggedIn, Component }: PrivateProps) =>
{

        if (isLoggedIn) {
                return <Component name="Krishna" />
        } else {
                return <Login />
        }
}

export default Private