import * as admin from "firebase-admin";
/**
 * A singleton class that provides access to the Firestore database.
 */
class Database {
  private static instance: Database;
  private db: FirebaseFirestore.Firestore;

  /**
     * Creates an instance of Database.
     */
  private constructor() {
    admin.initializeApp();
    this.db = admin.firestore();
  }

  /**
     * Returns the singleton instance of Database.
     * @return {Database} The Database instance.
     */
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  /**
     * Returns the Firestore database instance.
     * @return {FirebaseFirestore.Firestore} The Firestore database instance.
     */
  public getDb(): FirebaseFirestore.Firestore {
    return this.db;
  }
}

export default Database;
