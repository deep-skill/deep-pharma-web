import Header from "@/components/Header";
import Profile from "@/components/Profile";


const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <section>
            <Header />
            <Profile />
            {children}
        </section>
    );
};

export default HomeLayout