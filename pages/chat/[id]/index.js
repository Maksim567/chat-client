import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Header />
            <h1>Post: {id}</h1>
            <ul>
                <li>
                    <Link href="/chat/[id]/[comment]" as={`/post/${id}/first-cmment`}>
                        <a>First1 comment</a>
                    </Link>
                </li>
                <li>
                    <Link href="/chat/[id]/[comment]" as={`/post/${id}/second-comment`}>
                        <a>Second comment</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Post