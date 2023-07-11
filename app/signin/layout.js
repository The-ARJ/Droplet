import Header from "@/components/landingComponents/Header";
export const metadata = {
    title: 'Droplet - Sign In',
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