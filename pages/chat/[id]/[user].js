import { useRouter } from 'next/router'
import Header from '../../../components/header'

const Comment = () => {
    const router = useRouter()
    const { id, comment } = router.query

    return (
        <>
            <Header />
            <h1>Post1: {id}</h1>
            <h1>Comment1: {comment}</h1>
        </>
    )
}

export default Comment
