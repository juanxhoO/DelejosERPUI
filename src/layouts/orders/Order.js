import { useParams } from "react-router-dom";
import axios from "axios";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";
import Footer from "examples/Footer";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Order() {
  const { id } = useParams();

  return (
    <DashboardLayout>
      <MDBox>
        <p>Order {id}</p>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Order;
