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

  const fetchPrinterData = async () => {
    const data = await printerInfoMapper.getAllPrinterInfo();
    setPrinterData(data);
    return data;
  };

  useEffect(() => {
    fetchPrinterData();
  }, []);

  const value = { printerData, fetchPrinterData};

  return (
    <PrinterContext.Provider value={value}>
      {children}
    </PrinterContext.Provider>
  );
};