# Riziqstore - Web Ordering System

Modern web-based food ordering system with a beautiful Gradient Dream theme.

## 🎨 Features

- **Modern UI**: Gradient Dream theme with glassmorphism effects
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Shopping Cart**: Easy-to-use cart management
- **Payment Integration**: Midtrans payment gateway support
- **Order Tracking**: Real-time order status tracking
- **Multi-Tenant**: Support for multiple stores/tenants

## 🚀 Quick Start

### Prerequisites

- A web server (Node.js, Python, or any HTTP server)
- Appwrite account for backend
- Midtrans account for payments (optional for testing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ryota679/Riziqstore.git
   cd Riziqstore
   ```

2. **Configure Appwrite**
   - Copy `public/js/config.example.js` to `public/js/config.js`
   - Update with your Appwrite credentials:
     - Project ID
     - Database ID
     - Payment Function ID

3. **Run the development server**
   ```bash
   # Using npx serve
   npx serve public
   
   # Or using Python
   cd public && python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server public
   ```

4. **Open in browser**
   ```
   http://localhost:3000  (for npx serve)
   http://localhost:8000  (for Python)
   http://localhost:8080  (for http-server)
   ```

## 🔧 Configuration

### Appwrite Setup

1. Create a new project in Appwrite
2. Create a database with these collections:
   - `tenants` - Store/restaurant information
   - `products` - Menu items
   - `orders` - Customer orders
   - `categories` - Product categories

3. Deploy the cloud functions from the `functions/` directory

### Environment Variables

Update `public/js/config.js`:
```javascript
const APPWRITE_CONFIG = {
    projectId: 'your-project-id',
    endpoint: 'https://fra.cloud.appwrite.io/v1',
    databaseId: 'your-database-id',
    // ... other configs
};
```

## 📱 Usage

1. **Enter Tenant Code**: Start by entering your store's unique code
2. **Browse Menu**: View available products and add to cart
3. **Checkout**: Fill in delivery details and select payment method
4. **Pay**: Complete payment via Midtrans
5. **Track**: Monitor your order status in real-time

## 🎨 Customization

### Theme Colors

Edit `public/css/style.css` to customize:
- Gradient backgrounds
- Primary colors
- Card styles
- Animations

### Logo

Replace `public/images/logo.png` with your own logo.

## 📄 License

This project is for educational and business purposes.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📞 Support

For support, please contact the repository owner.

---

Made with ❤️ for Riziqstore
