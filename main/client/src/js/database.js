import { openDB } from 'idb';

// Initialize the database
const initdb = async () => {
  // Open the database with the name 'jate', version 1
  const db = await openDB('jate', 1, {
    // The upgrade function is called when the database needs to be upgraded
    upgrade(db) {
      // Check if the 'jate' object store already exists
      if (db.objectStoreNames.contains('jate')) {
        // If it does, log a message to the console
        console.log('jate database already exists');
        // Return early
        return;
      }
      // Create the 'jate' object store with a key path of 'id' and autoIncrement set to true
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      // Log a message to the console that the database has been created
      console.log('jate database created');
    },
  });
};

// Add content to the database
export const putDb = async (content) => {
  // Log an error message to the console, as this function is currently not implemented
  console.error('putDb not implemented');
};

// Get all the content from the database
export const getDb = async () => {
  // Log an error message to the console, as this function is currently not implemented
  console.error('getDb not implemented');
};

// Call the initdb function to initialize the database
initdb();
