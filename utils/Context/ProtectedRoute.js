import { useEffect, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "../../app/loading.module.css";
import { UserContext } from "./UserContext";
const ProtectedRoute = (WrappedComponent) => {
    const Wrapper = (props) => {
        const router = useRouter();
        const pathname = usePathname();
        const { user, loading } = useContext(UserContext);
        useEffect(() => {
            if (!user && !loading) {
                router.push("/");
            } else if (user) {
                router.replace("/home");
                // const allowedPages = ["/home", "/card", "/create-card"];
                // if (!allowedPages.includes(pathname)) {
                //     router.push("/");
                // }
            } else {
                console.log("User is not available. Loading...");
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