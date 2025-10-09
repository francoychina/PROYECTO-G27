

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
            <a href="/">
                Principal                    
            </a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <a href="/crear">
                        Crear tu producto                 
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar