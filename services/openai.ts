// OpenAI Service for MoneySprout
// This is a mock implementation. In production, you would use the actual OpenAI API

interface OpenAIResponse {
  text: string;
}

class OpenAIService {
  async generateResponse(userInput: string): Promise<OpenAIResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const input = userInput.toLowerCase();
    
    // More comprehensive and helpful responses
    if (input.includes('budget') || input.includes('spending')) {
      return {
        text: "Great question! Here's a simple budgeting strategy:\n\n1. **50/30/20 Rule**: 50% for needs, 30% for wants, 20% for savings\n2. **Track everything** for 30 days to see where your money goes\n3. **Use apps like Mint or YNAB** to automate tracking\n4. **Set realistic goals** - start small!\n\nWould you like me to help you create a personalized budget plan?"
      };
    }
    
    if (input.includes('save') || input.includes('saving')) {
      return {
        text: "Saving money is a journey! Here are proven strategies:\n\n💰 **Start with $1/day** - it adds up to $365/year!\n🎯 **Set specific goals** - 'Save $500 for vacation by June'\n🏦 **Automate transfers** - pay yourself first\n📱 **Use round-up apps** like Acorns\n\nWhat's your biggest saving challenge right now?"
      };
    }
    
    if (input.includes('debt') || input.includes('credit card')) {
      return {
        text: "Debt can feel overwhelming, but you can tackle it! Here's my advice:\n\n🔥 **Avalanche Method**: Pay highest interest first\n❄️ **Snowball Method**: Pay smallest balance first (psychological wins)\n💳 **Stop using credit cards** while paying off\n📞 **Call creditors** to negotiate lower rates\n\nWhat type of debt are you dealing with? I can give you a specific plan!"
      };
    }
    
    if (input.includes('invest') || input.includes('investment')) {
      return {
        text: "Investing is building wealth for your future! Start here:\n\n📈 **Index funds** - low-cost, diversified (Vanguard, Fidelity)\n🏦 **401(k) match** - free money from your employer\n💰 **Roth IRA** - tax-free growth for retirement\n📱 **Robo-advisors** - automated investing (Betterment, Wealthfront)\n\nRemember: Start small, be consistent, and think long-term!"
      };
    }
    
    if (input.includes('emergency fund') || input.includes('emergency')) {
      return {
        text: "Emergency funds are your financial safety net! Here's how to build one:\n\n🎯 **Goal**: 3-6 months of expenses\n💰 **Start with $500** - even small amounts help\n🏦 **Separate account** - don't mix with spending money\n📅 **Automate monthly transfers**\n\nWhere can you cut $50/month to start your emergency fund?"
      };
    }
    
    if (input.includes('credit score') || input.includes('credit')) {
      return {
        text: "Your credit score opens doors! Here's how to improve it:\n\n✅ **Pay on time** - 35% of your score\n💳 **Keep utilization under 30%** - 30% of your score\n📅 **Don't close old accounts** - length of credit history matters\n🔍 **Check your report** at annualcreditreport.com\n\nWhat's your current credit situation? I can help you create a plan!"
      };
    }
    
    if (input.includes('retirement') || input.includes('401k')) {
      return {
        text: "Retirement planning is crucial! Here's your roadmap:\n\n🎯 **Start early** - compound interest is your friend\n🏦 **Max out 401(k) match** - it's free money!\n💰 **Aim for 15%** of income saved\n📈 **Increase 1% yearly** until you reach your goal\n\nHow much are you currently saving for retirement?"
      };
    }
    
    if (input.includes('stress') || input.includes('anxiety') || input.includes('worried')) {
      return {
        text: "Financial stress is real, and you're not alone! Here's how to cope:\n\n🧘 **Breathe** - take 5 deep breaths\n📝 **Write it down** - list all your financial concerns\n🎯 **Pick ONE thing** to tackle this week\n💪 **Celebrate small wins** - every step counts\n\nWhat's causing you the most financial stress right now?"
      };
    }
    
    if (input.includes('income') || input.includes('salary') || input.includes('money')) {
      return {
        text: "Increasing your income is a powerful wealth-building tool! Consider:\n\n💼 **Side hustles** - freelancing, tutoring, delivery\n📚 **Skill development** - online courses, certifications\n🤝 **Networking** - connect with people in your field\n💡 **Passive income** - dividends, rental properties\n\nWhat skills do you have that could generate extra income?"
      };
    }
    
    if (input.includes('goal') || input.includes('target')) {
      return {
        text: "Setting financial goals is the first step to success! Here's how:\n\n🎯 **SMART goals**: Specific, Measurable, Achievable, Relevant, Time-bound\n💰 **Short-term**: Emergency fund, debt payoff\n📈 **Medium-term**: Down payment, vacation fund\n🏖️ **Long-term**: Retirement, financial freedom\n\nWhat's your biggest financial goal right now?"
      };
    }
    
    if (input.includes('spend') || input.includes('expense')) {
      return {
        text: "Controlling spending is key to financial success! Try these strategies:\n\n📱 **Track every dollar** for 30 days\n🛒 **Wait 24 hours** before big purchases\n💰 **Use cash** for discretionary spending\n📊 **Review subscriptions** monthly\n\nWhat's your biggest spending challenge?"
      };
    }
    
    if (input.includes('help') || input.includes('advice')) {
      return {
        text: "I'm here to help with your financial journey! I can assist with:\n\n💰 Budgeting and saving strategies\n💳 Debt management and credit improvement\n📈 Investing and retirement planning\n🎯 Goal setting and financial planning\n😰 Managing financial stress\n\nWhat specific area would you like to focus on today?"
      };
    }
    
    // Default response for unrecognized input
    return {
      text: "I'd love to help you with your finances! I can assist with budgeting, saving, debt management, investing, retirement planning, and more. What specific financial topic would you like to discuss? For example, you could ask me about:\n\n• How to create a budget\n• Ways to save more money\n• Strategies to pay off debt\n• Getting started with investing\n• Building an emergency fund\n\nWhat's on your mind?"
    };
  }

  // Real OpenAI API implementation (commented out for now)
  // async generateRealResponse(userInput: string): Promise<OpenAIResponse> {
  //   const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
  //     },
  //     body: JSON.stringify({
  //       model: 'gpt-3.5-turbo',
  //       messages: [
  //         {
  //           role: 'system',
  //           content: 'You are Seed, a friendly and knowledgeable AI financial coach. Provide practical, actionable financial advice. Be encouraging and supportive. Keep responses concise but helpful.',
  //         },
  //         {
  //           role: 'user',
  //           content: userInput,
  //         },
  //       ],
  //     }),
  //   });

  //   const data = await response.json();
  //   return { text: data.choices[0].message.content };
  // }
}

export const openAIService = new OpenAIService(); 