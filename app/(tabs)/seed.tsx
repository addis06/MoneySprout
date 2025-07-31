import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { openAIService } from '../../services/openai';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function SeedScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Seed, your AI financial coach. How are you feeling about your finances today? 🌱",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (inputText.trim() && !isLoading) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        isUser: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputText('');
      setIsLoading(true);

      try {
        const response = await openAIService.generateResponse(inputText);
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response.text,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, aiMessage]);
      } catch (error) {
        Alert.alert('Error', 'Failed to get response from Seed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#f8f9fa', '#e8f5e8']}
        style={styles.backgroundGradient}
      >
        <KeyboardAvoidingView 
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {/* Header */}
          <View style={styles.header}>
            <LinearGradient
              colors={['#4CAF50', '#45A049']}
              style={styles.headerGradient}
            >
              <View style={styles.headerContent}>
                <View style={styles.headerIconContainer}>
                  <IconSymbol size={32} name="brain.head.profile" color="#fff" />
                </View>
                <View style={styles.headerText}>
                  <ThemedText type="title" style={styles.headerTitle}>Seed</ThemedText>
                  <ThemedText type="subtitle" style={styles.headerSubtitle}>Your AI Financial Coach</ThemedText>
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Messages */}
          <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
            {messages.map((message) => (
              <View
                key={message.id}
                style={[
                  styles.messageBubble,
                  message.isUser ? styles.userMessage : styles.aiMessage,
                ]}
              >
                {!message.isUser && (
                  <View style={styles.aiAvatar}>
                    <IconSymbol size={16} name="brain.head.profile" color="#4CAF50" />
                  </View>
                )}
                <View style={[
                  styles.messageContent,
                  message.isUser ? styles.userMessageContent : styles.aiMessageContent
                ]}>
                  <ThemedText style={[
                    styles.messageText,
                    message.isUser ? styles.userMessageText : styles.aiMessageText
                  ]}>
                    {message.text}
                  </ThemedText>
                  <Text style={[
                    styles.timestamp,
                    message.isUser ? styles.userTimestamp : styles.aiTimestamp
                  ]}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Text>
                </View>
              </View>
            ))}
            {isLoading && (
              <View style={[styles.messageBubble, styles.aiMessage]}>
                <View style={styles.aiAvatar}>
                  <IconSymbol size={16} name="brain.head.profile" color="#4CAF50" />
                </View>
                <View style={[styles.messageContent, styles.aiMessageContent]}>
                  <View style={styles.typingIndicator}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                  </View>
                </View>
              </View>
            )}
          </ScrollView>

          {/* Input */}
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Tell Seed how you're feeling..."
                placeholderTextColor="#999"
                multiline
                editable={!isLoading}
              />
              <TouchableOpacity 
                style={[styles.sendButton, isLoading && styles.sendButtonDisabled]} 
                onPress={sendMessage}
                disabled={isLoading}
              >
                <LinearGradient
                  colors={isLoading ? ['#ccc', '#bbb'] : ['#4CAF50', '#45A049']}
                  style={styles.sendButtonGradient}
                >
                  <IconSymbol size={20} name="paperplane.fill" color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
  },
  header: {
    marginBottom: 8,
  },
  headerGradient: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  messageBubble: {
    flexDirection: 'row',
    marginVertical: 8,
    maxWidth: '85%',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  aiMessage: {
    alignSelf: 'flex-start',
  },
  aiAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  messageContent: {
    flex: 1,
    padding: 12,
    borderRadius: 18,
  },
  userMessageContent: {
    backgroundColor: '#4CAF50',
  },
  aiMessageContent: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  userMessageText: {
    color: '#fff',
  },
  aiMessageText: {
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
  },
  userTimestamp: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'right',
  },
  aiTimestamp: {
    color: '#999',
  },
  typingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 2,
  },
  inputContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
    fontSize: 16,
    maxHeight: 100,
    backgroundColor: '#f8f9fa',
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  sendButtonGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.6,
  },
}); 