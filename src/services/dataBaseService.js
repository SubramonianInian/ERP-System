import {
  doc,
  setDoc,
  collection,
  getDoc,
  getDocs,
  deleteDoc
} from 'firebase/firestore'
import { db } from '../firebase'

// Add all database collections here.
const Collections = {
  Company: 'Company',
  Employee: 'Employee',
  Attendance: 'Attendance'
}

// The core database service.
class DatabaseService {
  document
  documentRef
  collectionRef
  // The class constructor.
  constructor(document) {
    console.log(document)
    this.document = document
    this.collectionRef = collection(db, document)
    this.documentRef = doc(collection(db, document))
  }

  // returns list of records as an array of javascript objects
  getAll = async () => {
    let data = []
    const snapshot = await getDocs(this.collectionRef)
    snapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push({ id: doc.id, ...doc.data() })
    })

    return data
  }

  // returns a single document in object format
  //   getOne = async ({ queryKey }) => {
  //     const { id } = queryKey[1]
  //     if (!id) return // entity form is in create mode
  //     const snapshot = await this.documentRef.doc(id).get()
  //     return snapshot.data()
  //   }

  // resolve a relation, returns the referenced document
  //   getReference = async (documentReference) => {
  //     const res = await documentReference.get()
  //     const data = res.data()

  //     if (data && documentReference.id) {
  //       data.uid = documentReference.id
  //     }

  //     return data
  //   }

  // save a new document in the database
  create = async (data) => {
    return await setDoc(this.documentRef, data)
  }

  // update an existing document with new data
  //   update = async (id, values) => {
  //     return await this.documentRef.doc(id).update(values)
  //   }

  //   delete an existing document from the documentRef
  remove = async (id) => {
    console.log(this.document, id)
    const docRef = doc(db, this.document, id)
    deleteDoc(docRef)
      .then(() => {
        console.log('Entire Document has been deleted successfully.')
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// Export the required collections.
export const CompanyService = new DatabaseService(Collections.Company)
export const EmployeeService = new DatabaseService(Collections.Employee)
export const AttendanceService = new DatabaseService(Collections.Attendance)
