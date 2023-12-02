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


  async createPrintingRequest(printerDocumentID, studentDocumentID, documentName, documentBytesteam, receiveRequestTimestamp, printTimestamp, paperSize, paperPages, paperSides, printingStatus) { 
    
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


    return await this.createDocumentInNestedSubcollection(printingLogPath, mappedPrintingLog);
  }

  async getAllPrintingLogsByStudentID(studentDocumentID){
    const printingLogPath = ['Student', studentDocumentID, 'PrintingLog'];
    
    return await this.getAllDocumentsInSubcollection(printingLogPath);
  }

  async updatePageBalance(studentDocumentID, newPageBalance){
    const field = "PageBalance";
    return await this.createOrUpdateField(studentDocumentID, field, newPageBalance);
  }

  async getPageBalance(studentDocumentID){
    const field = "PageBalance";
    return await this.getFieldValue(studentDocumentID, field);
  }

}
  
 
  
export const studentMapper = new StudentMapper();