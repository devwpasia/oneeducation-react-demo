import Link from 'next/link'

const Navbar = () => {
    
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">One Education</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#oneNav" aria-controls="oneNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="oneNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link href="/">
                                <a class="nav-link active" aria-current="page">Home</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar