import Link from 'next/link'

const Navbar = () => {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">One Education</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#oneNav" aria-controls="oneNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="oneNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page">Home</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar