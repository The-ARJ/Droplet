import CardService from "../../../utils/Services/CardServices";
import swal from "sweetalert2";
import { toast } from "react-toastify";

const deleteCard = (id, getCards) => {
  const token = localStorage.getItem("token");

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
        CardService.deleteCardbyId(id, token)
          .then(() => {
            toast.success("Card Deleted Successfully", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            getCards();
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
};

export default deleteCard;
