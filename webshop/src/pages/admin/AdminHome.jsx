import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminHome() {
    return ( 
    <div>
        <Link to="/admin/add-product">
            <Button>Lisa Toode</Button>
        </Link>
        <Link to="/admin/maintain-products">
            <Button>Halda toode</Button>
        </Link>
    </div> );
}

export default AdminHome;