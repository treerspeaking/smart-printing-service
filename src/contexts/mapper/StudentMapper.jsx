import { FirestoreMapper } from '../../firebase/FirestoreMapper';
import { doc, collection } from 'firebase/firestore';

class StudentMapper extends FirestoreMapper {

  constructor() {
    super('Student');
  }

  async getStudentData(studentDocumentID) {
    const result = await this.getDocument(studentDocumentID);
    console.log("Student data: ",result);
    return result;
  }


  async createPrintingRequest(printerDocumentID, studentDocumentID, documentName, documentBytesteam, receiveRequestTimestamp, printTimestamp, paperSize, paperPages, paperSides, printingStatus, newPageBalance) { 
    


    const printingLogPath = ['Student', studentDocumentID, 'PrintingLog'];
    const mappedPrintingLog = {
      PrinterDocumentID: printerDocumentID,
      StudentDocumentID: studentDocumentID,
      DocumentName: documentName,
      DocumentBytesteam: documentBytesteam,
      ReceiveRequestTimestamp: receiveRequestTimestamp,
      PrintTimestamp: printTimestamp,
      PaperSize: paperSize,
      PaperPages: paperPages,
      PaperSides: paperSides,
      PrintingStatus: printingStatus
      // Add any other properties you want to map
    };
    await this.upDateBalance(studentDocumentID, newPageBalance);

    return await this.createDocumentInNestedSubcollection(printingLogPath, mappedPrintingLog);
  }

  async getAllPrintingLogsByStudentID(studentDocumentID){
    const printingLogPath = ['Student', studentDocumentID, 'PrintingLog'];
    
    return await this.getAllDocumentsInSubcollection(printingLogPath);
  }

  
  async getPageBalance(studentDocumentID){
    const field = "PageBalance";
    return await this.getFieldValue(studentDocumentID, field);
  }

  
  async addPageBalance(studentDocumentID, boughtPage) {
    const field = "PageBalance";

    const currentPageBalance = await this.getPageBalance(studentDocumentID);
    console.log("Current page balance: ", currentPageBalance);
    return await this.createOrUpdateField(studentDocumentID, field, currentPageBalance + boughtPage);
  }

  async upDateBalance(studentDocumentID, newPageBalance) {
    // update the student page balance
    const field = "PageBalance";

    return await this.createOrUpdateField(studentDocumentID, field, newPageBalance);
  }

}
  
 
  
export const studentMapper = new StudentMapper();