import StartToastifyInstance from 'toastify-js';

const toastifyMessage = text => {
  return StartToastifyInstance({
    text,
    className: 'info',
    style: {
      background: 'transparent',
      border: '2px solid rgba(94, 164, 237, 0.5)',
      borderRadius: '12px',
      backdropFilter: 'blur(15px)',
      position: 'fixed',
      right: '10px',

      zIndex: 999999,
      width: '220px',
      padding: '10px',
      fontFamily: 'Manrope',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      color: '#fff',
    },
  }).showToast();
};

export default toastifyMessage;
