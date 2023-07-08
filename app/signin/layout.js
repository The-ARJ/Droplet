import Header from "@/components/landingComponents/Header";

export default function SignInLayout({
    children,
}) {
    return (
        <section >
            <Header/>
            {children}
        </section>
    )
}