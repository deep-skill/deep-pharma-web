'use client'
import { useUser } from "@auth0/nextjs-auth0/client";


const HomeScreen = () => {
    const { user, error, isLoading } = useUser();

    return (
        <section>
            <h1>Hola Bruno</h1>
            <p>{user?.email}</p>
            <p>{user?.name}</p>
        </section>
    );
};

export default HomeScreen