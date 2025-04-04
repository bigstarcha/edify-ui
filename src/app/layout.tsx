import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: '400'
});

function RootLayout({ children }) {
    return (
        <html lang="en" className={robotoCondensed.className}>
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;