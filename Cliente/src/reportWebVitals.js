const reportWebVitals = onPerfEntry => {
  
  if (onPerfEntry && onPerfEntry instanceof Function) {

    // Importar las funciones de medición de rendimiento de web-vitals
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {

    // Llamar a las funciones de medición de rendimiento con la devolución de llamada proporcionada
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
