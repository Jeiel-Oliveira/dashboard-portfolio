import Swal from 'sweetalert2';
import check from './check';

function closeSwal() {
  Swal.close();
}

const base = (icon, title, text) => {
  Swal.fire({
    icon,
    title,
    text
  })
}

const loading = (show) => {

  if(check.isNullUndefined(show)) throw new Error('Passe um valor.')
  if(!check.isBoolean) throw new Error('Passe um valor booleano.')

  if(show) {
    Swal.fire({
      title: 'Carregando!',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })
  } else {
    closeSwal();
  }
}

const swal = {
  loading,
  base
}

export default swal