
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export const SweetAlertError = (message, type)=>{

    switch (type) {
        case 'simple':
            Swal.fire(message);
          break;
       
        default:
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: message,
            });
      }

}


export const SweetAlertConfirmDelete = (callback)=>{

  return Swal.fire({
      title: "Esta Seguro/a?",
      text: "Se dispone a eliminar un producto de su lista de compras!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Quiero Eliminarlo!",
      cancelButtonText: "Cancelar!"
    }).then((result) => {
      if (result.isConfirmed ) {
        Swal.fire({
          title: "Su Producto Fue Eliminado.!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
        callback(result && result.value == true);
      }
    });
   
}

export const SweetAlertConfirmKeepBuying = (callback)=>{
  return Swal.fire({
      title: "Esta Seguro/a ?",
      text: "Desea seguir incluyendo productos a su lista de compras ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Quiero Ver la Lista de Compras!",
      cancelButtonText: "Incluir Más Productos!"
    }).then((result) => {
      if (result.isConfirmed ) {
        callback(result && result.value == true);
      }
    });
   
}

