// Appwrite Configuration Template
// IMPORTANT: Copy this file to config.js and fill in your actual values
// DO NOT commit config.js to version control!

const APPWRITE_CONFIG = {
    projectId: 'YOUR_PROJECT_ID',  // Get from Appwrite Console
    endpoint: 'https://fra.cloud.appwrite.io/v1',
    databaseId: 'YOUR_DATABASE_ID',  // Get from Appwrite Console
    ordersCollectionId: 'orders',
    collections: {
        orders: 'orders',
        products: 'products',
        tenants: 'tenants',
        categories: 'categories'
    }
};

// Payment Function ID
const PAYMENT_FUNCTION_ID = 'YOUR_PAYMENT_FUNCTION_ID'; // Get from Appwrite Console

// Debug Mode - set to true for development
const kDebugMode = false;

// Initialize Appwrite
const { client, databases, account } = initializeAppwrite();

function initializeAppwrite() {
    const client = new Appwrite.Client()
        .setEndpoint(APPWRITE_CONFIG.endpoint)
        .setProject(APPWRITE_CONFIG.projectId);

    const databases = new Appwrite.Databases(client);
    const account = new Appwrite.Account(client);

    return { client, databases, account };
}
