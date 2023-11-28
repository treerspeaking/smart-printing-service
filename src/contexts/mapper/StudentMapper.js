import { FirestoreMapper } from '../../firebase/FirestoreMapper';

class StudentMapper extends FirestoreMapper {
    constructor() {
      super('Student');
    }
  
    GetStudentData() {
      return this.fetchData('Student');
    }

    CreatePrintingRequest(){
      
    }

    // You can add more methods specific to StudentMapper here
  }
  
 
  
export const studentMapper = new StudentMapper();