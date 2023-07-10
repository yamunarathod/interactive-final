import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FeedbackForm } from './models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {
  private dbPath ="/formData";

  feedBackFormRef : AngularFirestoreCollection<FeedbackForm>;

  constructor(private db : AngularFirestore) {
      this.feedBackFormRef = db.collection(this.dbPath);
   }

   getAll() : AngularFirestoreCollection<FeedbackForm> {
      return this.feedBackFormRef;
   }

   create(feedbackForm: FeedbackForm) {
    return this.feedBackFormRef.add({ ...feedbackForm });
   }

   update(id: string, data: any): Promise<void> {
    return this.feedBackFormRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.feedBackFormRef.doc(id).delete();
  }
}
