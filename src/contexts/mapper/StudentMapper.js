import { FirestoreMapper } from '../../firebase/FirestoreMapper';

class StudentMapper extends FirestoreMapper {

  constructor() {
    super('Student');
  }

  async getStudentData(studentDocumentID) {
    const result = await this.getDocument(studentDocumentID);
    console.log("Student data: ",result);
    return result;
  }


  async createPrintingLog(printerDocumentID, studentDocumentID, documentName, documentBytesteam, timestamp, paperSize, paperPages, paperSides, printingStatus) { 
    
    const printingLogPath = ['Student', studentDocumentID, 'PrintingLog'];
    
    const mappedPrintingLog = {
      PrinterDocumentID: printerDocumentID,
      StudentDocumentID: studentDocumentID,
      DocumentName: documentName,
      DocumentBytesteam: documentBytesteam,
      ReceiveRequestTimestamp: timestamp,
      PrintTimestamp: timestamp,
      PaperSize: paperSize,
      PaperPages: paperPages,
      PaperSides: paperSides,
      PrintingStatus: printingStatus
      // Add any other properties you want to map
    };


    return this.createDocumentInNestedSubcollection(printingLogPath, mappedPrintingLog);
  }

  async getAllPrintingLogsByStudentID(studentDocumentID){
    const printingLogPath = ['Student', studentDocumentID, 'PrintingLog'];
    
    return this.getAllDocuments();
  }

  // You can add more methods specific to StudentMapper here
}
  
 
  
export const studentMapper = new StudentMapper();