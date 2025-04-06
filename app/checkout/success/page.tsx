import MainContent from '@/components/MainContent/MainContent';

import styles from './success.module.scss';
import MainButton from '@/components/MainButton/MainButton';

const SuccessPage = () => {
  return (
    <MainContent>
      <div className={styles.successContainer}>
        <h1>¡Compra realizada con éxito!</h1>
        <p>Gracias por confiar en nosotros.<br/> Tu compra ha sido procesada correctamente.</p>
        <p>Pronto recibirás un correo electrónico con los detalles de tu compra.</p>
        <div className={styles.actions}>
            <MainButton color='secondary' url='/vehicles'>Ver más vehículos</MainButton>
            <MainButton color='secondary' url='/'>Volver al inicio</MainButton>
          
        </div>
      </div>
    </MainContent>
  );
};

export default SuccessPage;