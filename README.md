# Temporary Email Service

A modern, secure temporary email service built with Next.js 14, React, and TypeScript. Create disposable email addresses instantly and receive emails in real-time.

![Temporary Email Service](public/screenshot.png)

## Features

- 🚀 **Instant Email Generation**: Create temporary email addresses with one click
- ⚡ **Real-time Updates**: Receive emails instantly with automatic inbox refresh
- 🔒 **Secure**: HTML sanitization for email content and XSS protection
- 🎨 **Modern UI**: Clean and responsive interface built with Tailwind CSS
- 🌓 **Dark Mode**: Seamless light/dark mode switching
- 📱 **Mobile Friendly**: Fully responsive design for all devices
- ⌛ **Auto-expiry**: Emails automatically expire after 10 hours
- 📋 **Copy & Share**: Easy email address copying and message sharing
- 🔌 **API Integration**: Simple REST API for programmatic access

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Shadcn/ui
- **State Management**: React Hooks
- **Email Parsing**: DOMPurify for HTML sanitization
- **Icons**: Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/meyanksingh/temp-email-service.git
cd temp-email-service
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file:
```env
NEXT_PUBLIC_API_BASE_URL=https://mail.meyank.me
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
temp-email-service/
├── app/                    # Next.js app directory (App Router)
├── components/             # React components
├── config/                 # Configuration files
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and types
├── public/                 # Static assets
├── styles/                 # Global styles and Tailwind CSS
├── .env.local             # Environment variables
├── .gitignore             # Git ignore rules
├── components.json         # Shadcn/ui components config
├── next.config.mjs        # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_BASE_URL=https://mail.meyank.me
```

## Dependencies

### Core Dependencies
- Next.js 15.1.0
- React 19
- TypeScript 5
- Tailwind CSS 3
- Radix UI Components
- DOMPurify
- date-fns
- Zod
- React Hook Form

### Development Dependencies
- PostCSS
- TypeScript
- ESLint
- Various type definitions

## Browser Support

The service supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

## Security

- All email content is sanitized using DOMPurify
- No emails are stored permanently
- Auto-expiry after 10 hours
- Rate limiting on API endpoints
- XSS protection
- CORS enabled for API endpoints

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please:
1. Check the [Issues](https://github.com/yourusername/temp-email-service/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide as much detail as possible about your problem

## Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the amazing React framework

## Roadmap

- [ ] Multiple email address support
- [ ] Custom domain support
- [ ] Email attachments
- [ ] Advanced filtering options
- [ ] API authentication for premium features
- [ ] Mobile apps (iOS/Android)

## API Integration

The service provides a simple REST API for programmatic access to temporary email functionality.

### Base URL
```
https://mail.meyank.me
```

### Endpoints

#### 1. Generate Temporary Email
```http
GET /tempmail
```

Response:
```json
{
  "data": {
    "email": "generated.email@domain.com"
  }
}
```

#### 2. Get Inbox Messages
```http
GET /tempmail/<email>
```

Response:
```json
{
  "data": [
    {
      "id": "string",
      "from": "sender@example.com",
      "subject": "Email Subject",
      "body": "Email Body Content",
      "received_at": "ISO-8601 timestamp"
    }
  ]
}
```

### Error Responses
```json
{
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE",
    "status": 400
  }
}
```

### Rate Limiting
- Default rate limit: 100 requests per hour per IP
- Emails expire after 10 hours of creation

### Example Integration (JavaScript)
```javascript
// Generate temporary email
const response = await fetch('https://mail.meyank.me/tempmail');
const { data } = await response.json();
const email = data.email;

// Check inbox
const inbox = await fetch(`https://mail.meyank.me/tempmail/<${encodeURIComponent(email)}>`);
const messages = await inbox.json();
```