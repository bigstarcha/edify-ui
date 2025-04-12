import WelcomePage from "@components/WelcomePage";

export default function Home() {
    /**
     * In the long run, we want to get user authentication props from the server.
     * Based on whether the user is logged in, we display the user's home page or the
     * welcome page.
     */
    return <WelcomePage />;
}
