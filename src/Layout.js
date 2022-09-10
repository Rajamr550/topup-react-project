import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/bill">Bill</Link>
                    </li>
                    <li>
                        <Link to="/pay">Payment</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">Nothing Here</Link>
                    </li>
                </ul>
            </nav>

            <hr />


            <Outlet />
        </div>
    );
}
