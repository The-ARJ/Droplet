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
                const unauthenticatedPages = ["/", "/signin", "/signup"];
                if (!unauthenticatedPages.includes(pathname)) {
                    router.push("/");
                }
            } else if (user) {
                const authenticatedPages = ["/home", "/card", "/create-card"];
                if (!authenticatedPages.includes(pathname)) {
                    router.push("/home");
                    return <div className={styles.loader}></div>;
                }
            } else {
                return
            }
        }, [user, loading, pathname, router]);

        if (loading) {
            return <div className={styles.loader}></div>;
        } else if (user && (pathname === "/" || pathname === "/signin" || pathname === "/signup")) {
            router.push("/home");
            return <div className={styles.loader}></div>;
        } else if (!user && (pathname === "/home" || pathname === "/card" || pathname === "/create-card" || pathname === "/profile")) {
            router.push("/");
            return <div className={styles.loader}></div>;
        } else {
            return <WrappedComponent {...props} />;
        }
    };

    return Wrapper;
};

export default ProtectedRoute;
