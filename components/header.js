import Link from 'next/link'

const Header = () => (
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/chat">
                    <a>chat</a>
                </Link>
            </li>
            <li>
                <Link href="/chat/[id]" as="/chat/1">
                    <a>First Post</a>
                </Link>
            </li>
        </ul>
    </header>
)

export default Header