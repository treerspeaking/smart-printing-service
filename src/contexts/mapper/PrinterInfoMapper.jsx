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
    console.log("Getting all printer info");
    const result = await this.getAllDocuments();
    console.log("All printer info ", result);
    return result;
  }
  
  // You can add more methods specific to PrinterMapper here
}
  
export const printerInfoMapper = new PrinterInfoMapper();