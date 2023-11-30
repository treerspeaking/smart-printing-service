import { FirestoreMapper } from '../../firebase/FirestoreMapper';

class PrinterInfoMapper extends FirestoreMapper {

  constructor() {
    super('PrinterInfo');
  }

  async getPrinterInfo(printerDocumentID) {
    const result = await this.getDocument(printerDocumentID);  
    return result;
  }

  async getAllPrinterInfo(){
    
    const result = await this.getAllDocuments();
    
    return result;
  }
  
  // You can add more methods specific to PrinterMapper here
}
  
export const printerInfoMapper = new PrinterInfoMapper();