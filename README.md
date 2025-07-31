# 🌱 MoneySprout - AI-Powered Financial Coaching App

MoneySprout is a beginner-friendly savings platform designed for first-time and underrepresented savers. It uses an AI chatbot named Seed to provide emotional, intelligent, and practical financial coaching.

## ✨ Features

- **🤖 AI Financial Coach (Seed)**: Personalized financial advice and emotional support
- **🎯 Savings Goals Tracking**: Set and track progress on your financial goals
- **📚 Educational Videos**: Learn financial literacy through curated video content
- **📊 Progress Analytics**: Visual progress tracking and achievement badges
- **🌱 Encouraging Design**: Warm, supportive UI focused on growth and progress

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MoneySprout
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your device**
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)
   - Or press `w` to open in web browser
   - Or press `i` for iOS simulator / `a` for Android emulator

## 🤖 OpenAI Integration Setup

The app currently uses a mock AI service for demo purposes. To enable real OpenAI integration:

### 1. Get OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account and navigate to API Keys
3. Generate a new API key
4. Copy the key (you'll need it for the next step)

### 2. Configure the Service

1. Open `services/openai.ts`
2. Uncomment the `generateRealResponse` method
3. Replace the mock implementation with:

```typescript
// In services/openai.ts
constructor(apiKey?: string) {
  this.apiKey = apiKey || process.env.OPENAI_API_KEY || null;
}

async generateResponse(userMessage: string, context?: string): Promise<OpenAIResponse> {
  if (this.apiKey) {
    return this.generateRealResponse(userMessage, context);
  }
  // Fall back to mock responses
  return this.generateMockResponse(userMessage);
}
```

### 3. Set Environment Variables

Create a `.env` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Update the Service Call

In `app/(tabs)/seed.tsx`, you can now use the real API:

```typescript
const response = await openAIService.generateResponse(inputText);
```

## 📱 App Structure

```
MoneySprout/
├── app/
│   └── (tabs)/
│       ├── index.tsx          # Home dashboard
│       ├── seed.tsx           # AI chatbot
│       ├── goals.tsx          # Savings goals
│       ├── videos.tsx         # Educational content
│       └── profile.tsx        # User profile
├── components/                 # Reusable UI components
├── services/
│   └── openai.ts             # OpenAI integration
└── constants/
    └── Colors.ts             # App theming
```

## 🎯 Key Features Explained

### Home Dashboard
- **Savings Overview**: Visual progress tracking
- **Quick Actions**: Direct access to main features
- **Recent Activity**: Track your financial journey
- **Motivational Quotes**: Encouraging messages

### Seed AI Coach
- **Contextual Responses**: AI understands financial topics
- **Emotional Support**: Encouraging and supportive tone
- **Practical Advice**: Actionable financial guidance
- **Real-time Chat**: Instant responses with typing indicators

### Goals Tracking
- **Visual Progress**: Progress bars and completion tracking
- **Quick Add**: One-tap savings additions
- **Categories**: Organize goals by type
- **Deadlines**: Set and track target dates

### Educational Videos
- **Categorized Content**: Filter by topic
- **Progress Tracking**: Track video completion
- **External Links**: Open videos in browser/app
- **Difficulty Levels**: Beginner to advanced content

## 🛠️ Tech Stack

- **Frontend**: React Native with Expo
- **Navigation**: Expo Router
- **AI**: OpenAI GPT-3.5/4 (optional)
- **Styling**: React Native StyleSheet
- **Icons**: SF Symbols (iOS) / Material Icons (Android)

## 🔧 Customization

### Adding New Video Content

1. Edit `app/(tabs)/videos.tsx`
2. Add new video objects to the `videos` array:

```typescript
{
  id: 'unique-id',
  title: 'Video Title',
  description: 'Video description',
  duration: '5:30',
  category: 'Basics',
  thumbnail: '💰',
  videoUrl: 'https://youtube.com/watch?v=...',
  instructor: 'Instructor Name',
  difficulty: 'Beginner',
  isCompleted: false,
  progress: 0,
}
```

### Customizing AI Responses

1. Edit `services/openai.ts`
2. Modify the `generateResponse` method
3. Add new keyword patterns and responses

### Styling Changes

1. Edit `constants/Colors.ts` for theme colors
2. Modify individual component styles
3. Update the green color scheme as needed

## 🚀 Deployment

### Expo Build

```bash
# Build for production
expo build:android
expo build:ios

# Or use EAS Build
eas build --platform all
```

### Web Deployment

```bash
# Build for web
expo build:web

# Deploy to Vercel/Netlify
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Create an issue on GitHub
- Check the Expo documentation
- Review the OpenAI API documentation

---

**🌱 Built with love for financial wellness and growth!**
