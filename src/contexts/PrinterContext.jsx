import React, { createContext, useState, useEffect, useContext } from 'react';
import { printerInfoMapper } from './mapper/PrinterInfoMapper';

// Create a context
const PrinterContext = createContext();

export const usePrinter = () => {
	return useContext(PrinterContext);
}

// Create a provider
export const PrinterProvider = ({ children }) => {
  const [printerData, setPrinterData] = useState(null);

  useEffect(() => {
    const fetchPrinterData = async () => {
      const data = await printerInfoMapper.getAllPrinterInfo();
      setPrinterData(data);
    };
    fetchPrinterData();
  }, []);

  return (
    <PrinterContext.Provider value={printerData}>
      {children}
    </PrinterContext.Provider>
  );
};