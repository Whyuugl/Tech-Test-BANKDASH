# BankDash - Credit Cards Application

A modern banking dashboard application for managing credit cards and financial services.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase CLI

### Installation

1. Install dependencies:
```bash
npm install
```

2. Install Firebase CLI globally (if not already installed):
```bash
npm install -g firebase-tools
```

### Development

Run the development server:
```bash
npm run dev
```

This will start the development server at `http://localhost:3000`

### Building for Production

Build the application for production:
```bash
npm run build
```

This will create optimized files in the `dist` folder.

### Firebase Deployment

1. Initialize Firebase (first time only):
```bash
npm run firebase:init
```

2. Update `.firebaserc` with your Firebase project ID:
```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

3. Deploy to Firebase:
```bash
npm run firebase:deploy
```

### Project Structure

```
tech-test/
├── src/
│   ├── index.js          # Main entry point
│   └── setting.js        # Setting page entry point
├── assets/
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript files
│   └── img/              # Images
├── dist/                 # Build output (generated)
├── webpack.config.js     # Webpack configuration
├── firebase.json         # Firebase hosting config
├── .firebaserc          # Firebase project config
└── package.json         # Dependencies and scripts
```

### Features

- Modern responsive design
- Credit card management interface
- Transaction history
- Settings management
- Optimized for production deployment
- Firebase hosting ready

### Build Optimization

The webpack configuration includes:
- CSS extraction and minification
- Image optimization
- Code splitting
- Cache busting with content hashes
- Vendor chunk separation

### Firebase Hosting Features

- Static file serving
- SPA routing support
- Cache headers for performance
- Automatic HTTPS
- Global CDN 