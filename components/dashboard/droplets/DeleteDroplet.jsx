import DropletService from "../../../utils/Services/DropletServices";
import swal from "sweetalert2";
import { toast } from "react-toastify";

const deleteDroplet = (id, getDroplets) => {
  const token = localStorage.getItem("token");
  console.log(id);
  swal
    .fire({
      text: "Are you sure you want to Delete?",
      showCancelButton: true,
      cancelButtonColor: "#7e22ce",
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Delete",
      position: "top",
    })
    .then((result) => {
      if (result.isConfirmed) {
        DropletService.deleteDropletbyId(id, token)
          .then(() => {
            toast.success("Droplet Deleted Successfully", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            getDroplets();
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
};

export default deleteDroplet;
