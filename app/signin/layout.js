import Header from "@/components/landingComponents/Header";
export const metadata = {
    title: 'Cardova - Sign In',
}
export default function SignInLayout({
    children,
}) {
    return (
        <section >
            {children}
        </section>
    )
}