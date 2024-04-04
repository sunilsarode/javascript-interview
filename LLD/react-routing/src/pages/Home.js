import {Link} from 'react-router-dom'

export default function Home(){
    return <h1>
        Home
        <p>
            Go to <Link to='/products'>The list of products </Link>
        </p>
    </h1>
}