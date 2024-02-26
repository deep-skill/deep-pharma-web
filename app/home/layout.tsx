import Header from "@/components/Header";
import Profile from "@/components/Profile";


const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <Profile />
            {children}
        </div>
    );
};

export default HomeLayout