import { NavigationBar } from '../components/NavigationBar'
import { FooterBar } from '../components/FooterBar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <NavigationBar/>
            <main>
                <Outlet/>
            </main>
            <FooterBar/>
        </div>
    )
}