import { useEffect, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "../../app/loading.module.css";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
const ProtectedRoute = (WrappedComponent) => {
    const Wrapper = (props) => {
        const router = useRouter();
        const pathname = usePathname();
        const { user, loading } = useContext(UserContext);
        useEffect(() => {
            if (!user && !loading) { // Check both user and loading state
                router.push("/");
            } else {
                const allowedPages = ["/home", "/card", "/create-card"];
                if (!allowedPages.includes(pathname)) {
                    router.push("/");
                }
            }
        }, [user, loading, pathname, router]);

        if (loading) {
            return <div className={styles.loader}></div>;
        } else {
            return <WrappedComponent {...props} />;
        }
    };

    return Wrapper;
};


export default ProtectedRoute;