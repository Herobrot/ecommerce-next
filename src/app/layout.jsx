import "./globals.css";

export const metadata = {
    charset: "UTF-8",
    title: "UP Snearers",
    description: "Página principal de UP Snearers"
}

export default function HomeLayout({children}){
    return(
        <html lang="es-MX">
            <head>
                <link rel="logo UPSnearers" href="/favicon.ico" type="image/x-icon" />
                <link href='https://fonts.googleapis.com/css?family=Blinker' rel='stylesheet' />
                <script src="https://kit.fontawesome.com/88239f68d2.js" crossorigin="anonymous"></script>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}