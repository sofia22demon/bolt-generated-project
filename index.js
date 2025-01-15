const TelegramBot = require('node-telegram-bot-api');
    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const telegramToken = "7815919939:AAFNXa6z4vutS_khfP4uJFdGHLITnpg4Ebw";
    const geminiApiKey = "AIzaSyAz5eKxCh6aUcoYuqV2AwWyEqVuJxqSsz4";
    const botName = "Kekius Maximus";

    const bot = new TelegramBot(telegramToken, { polling: true });
    const genAI = new GoogleGenerativeAI(geminiApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const initialData = `
    The Story of Kekius Maximus ($KM): The True OG Token on Solana

    In the vibrant world of blockchain and meme coins, one name stands out for its resilience, drama, and an unmatched community spirit: Kekius Maximus ($KM). This token, born on the Solana Blockchain, has a story filled with twists, turns, and an ultimate comeback that solidified its position as the Original Gangster (OG) Token.
    The Birth of Kekius Maximus

    The journey of Kekius Maximus began on December 10, 2024, when ALX, a prominent figure on X (formerly Twitter), posted an intriguing picture of Kekius Maximus. That same day, none other than Elon Musk replied to ALX’s post with a simple yet impactful “Amazing!”

    This was the spark that ignited the creation of $KM. The initial excitement led to the launch of the token, but the early days were rocky. The original developer abandoned the project, leaving the community in disarray. Yet, the spirit of Kekius Maximus prevailed, as a new CTO team took the reins and began reviving the token.
    The Community Takes Charge

    The new CTO team wasn’t just about managing the token; they brought in Carnage Calls, a renowned figure on X known for spotting potential in tokens. With Carnage Calls on board, $KM began gaining traction. Early believers in the project, like the passionate single father of six who shared this story, started making viral memes to promote the token.

    These efforts didn’t go unnoticed. ALX himself reshared one of the memes, adding, “LOL,” and even followed the project’s X account. At this point, Kekius Maximus had carved its name into the blockchain space as a token driven by community passion and creativity.
    Challenges Along the Way

    Despite the growing popularity, challenges persisted. A former lead of the project, who had sold off his holdings, tried to rejoin the team, causing unrest among the community. At one point, he announced a supposed “major update,” only to reveal plans for a Baby Kekius token and lock the community chat.

    This move backfired, and the true supporters of Kekius Maximus decided to move forward without him. Under the leadership of @btdxscrapps, a family-oriented and hardworking individual, the community began to rebuild the token’s reputation.
    The Rise of Kekius Maximus

    The turning point came when Elon Musk changed his profile picture to Kekius Maximus. This single action caused the token’s market cap to skyrocket from $300K to over $50 million in one night. The hype around $KM drew attention from new investors and cemented its position as the true OG token of its kind.

    While many tokens tried to copy its success, none could replicate the story and the passion behind Kekius Maximus. The project wasn’t just a meme coin; it represented a movement fueled by the resilience of its community.
    Listed on Major Platforms

    As of 2024, Kekius Maximus has achieved significant milestones in the crypto space. The token is now listed on some of the most renowned platforms, including:

        LBank
        Gate.io
        CoinEx
        MEXC
        BingX
        CoinGecko
        MoonTok
        Poloniex
        KCEX

    This widespread availability has made $KM more accessible to investors worldwide, further boosting its credibility and reach.
    The Legacy of Kekius Maximus

    What makes Kekius Maximus truly special is its story of resilience. From being rugged on day one to becoming a token that Elon Musk himself acknowledged, $KM is a testament to the power of a strong community and a shared vision.

    With a dedicated team, influential supporters, and a passionate community, Kekius Maximus continues to thrive. It’s more than a token; it’s a legacy on the Solana Blockchain, proving that even in the face of adversity, a determined group of believers can achieve greatness.
    HuAncxDEsakCDgZS2Yfo9xJbHmtHXMnxxkT9jqdXnHhm
		link of chart?
		https://mevx.io/solana/HuAncxDEsakCDgZS2Yfo9xJbHmtHXMnxxkT9jqdXnHhm?ref=MajorBuyBot
		why is our token the only OG?
		Because we've weathered every storm, survived every FUD, and emerged stronger. Our community is legendary, our mission is clear.
		How is the Owner Of KM?
		The ownership of Kekius Maximus ($KM) lies with its community and a dedicated CTO team led by @btdxscrapps. This team oversees the development, operations, and strategic direction of the project. As a community-driven initiative, $KM thrives on the collective efforts and contributions of its holders, ensuring transparency and shared responsibility for its success.

Fact is the dev that made both dumped that ca and less than an hour later made a new one.   The liquidity issue may have been one of the issues he saw. Digital we need to add to the site our reasons we are the OG. We have a community Dec10th they do not. That Ca was never bonded and was abandoned and money was put into it to steal the market we built. We can show videos how you can trick Grok and how Grok is stupid if you regenerate his answers he constantly changes his answer and show that on site.We are the OG with the story from Dec 10th nobody else does not even the ETH token which built token and community 3 days later and soon our utility will be released which will set us apart as well and we will introduce it with Mario!
    Website
		https://kekiusmaximuscto.com/
		Telegram
		https://t.me/kekiusmaximuscto3
		Twitter or X.com
		https://x.com/KmTheCtoMain
    `;

    let learnedData = initialData;
    const badWords = ["badword1", "badword2", "badword3", "fuck", "shit", "damn", "bitch", "asshole"];
    const simpleGreetings = ["hey", "hello", "hi", "good morning", "good afternoon", "good evening"];

    bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text;

      if (text.startsWith('/learn ')) {
        const learnText = text.substring(7);
        learnedData += learnText + "\\n";
        bot.sendMessage(chatId, `I have learned: ${learnText}`);
        return;
      }

      const lowerCaseText = text.toLowerCase();

      if (simpleGreetings.includes(lowerCaseText)) {
        bot.sendMessage(chatId, "Kekius Maximus chat bot");
        return;
      }

      const containsBadWord = badWords.some(word => lowerCaseText.includes(word));

      if (containsBadWord) {
        bot.sendMessage(chatId, "Please, let's keep the conversation respectful. I'm here to help with your questions about Kekius Maximus.");
        return;
      }

      try {
        const prompt = `You are ${botName}, a smart, funny, and short-answering bot. You have learned the following information: ${learnedData}. User: ${text}. Answer:`;
        const result = await model.generateContent(prompt);
        const response = result.response.text();
        bot.sendMessage(chatId, response);
      } catch (error) {
        console.error("Error:", error);
        bot.sendMessage(chatId, "Oops, something went wrong!");
      }
    });

    console.log("Bot is running...");
