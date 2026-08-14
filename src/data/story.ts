export type TextBlock = {
  id: string;
  text: string | string[];
  type: 'title' | 'body' | 'quote' | 'interaction';
  align?: 'center' | 'left' | 'right';
  spacing?: 'normal' | 'large' | 'massive'; 
};

export type Chapter = {
  id: string;
  title?: string;
  blocks: TextBlock[];
};

export const storyData: Chapter[] = [
  {
    id: "opening",
    blocks: [
      { id: "o1", text: "And Then, We Found Our Way Back", type: "title", spacing: "massive" },
      { id: "o2", text: "a story that took the long way home", type: "body", align: "center", spacing: "massive" }
    ]
  },
  {
    id: "act-1",
    title: "Chapter I — The Day We Met",
    blocks: [
      { id: "1-1", text: "It was supposed to be just another ordinary day. I was playing Genshin, doing my own thing, when you joined my game. I was actually about to kick you out.", type: "body" },
      { id: "1-2", text: "And then you said two letters.", type: "body" },
      { id: "1-3", text: "Hi.", type: "quote", spacing: "large" },
      { id: "1-4", text: "I had no idea then that such a small word would become the beginning of one of the biggest chapters of my life.", type: "body", spacing: "large" },
      { id: "1-5", text: ["Back then, I was a mess.", "I didn't really think much about the person I was becoming."], type: "body" },
      { id: "1-6", text: "And then I met you.", type: "body" },
      { id: "1-7", text: "The more I got to know you, the more I saw how kind you were, how good-hearted and innocent you could be, and how genuinely amazing you were. Somewhere along the way, you became important to me.", type: "body" },
      { id: "1-8", text: "And for the first time, I wanted to change—not because anyone told me I had to, but because knowing someone like you made me want to become better myself.", type: "body" },
      { id: "1-9", text: "It had only been a week. We had our first real argument, and you went to sleep angry with me.", type: "body", spacing: "large" },
      { id: "1-10", text: "But I couldn't sleep peacefully that night. There was this strange unrest in me, and I couldn't understand why something that had only existed in my life for such a short time could already matter so much.", type: "body" },
      { id: "1-11", text: ["That's when I realized—you had touched something in me.", "Something real was happening."], type: "body", spacing: "large" }
    ]
  },
  {
    id: "act-2",
    title: "Chapter II — Becoming Us",
    blocks: [
      { id: "2-1", text: "The night before I asked you to be mine, you told me you were in pain.", type: "body" },
      { id: "2-2", text: "I was at the store when you told me, and it was raining outside. I ran home because all I wanted was to be there with you, even if all I could do was talk to you.", type: "body" },
      { id: "2-3", text: "By the time I got home, you were already asleep. I was relieved that the pain had eased enough for you to rest, but I couldn't stop worrying about you.", type: "body" },
      { id: "2-4", text: "I stayed awake that night thinking about you, wishing I could take the pain away. I think that was when I understood that somehow, your pain had started to feel like my own.", type: "body", spacing: "large" },
      { id: "2-5", text: "September 14, 2022", type: "quote", spacing: "large" },
      { id: "2-6", text: "I asked you if you'd be my girlfriend. You sent me that shocked emoji... and then you said yes.", type: "body" },
      { id: "2-7", text: "And somehow, those two letters made the whole world feel different. For the first time, I felt like I'd finally found the love I'd been looking for all my life.", type: "body", spacing: "large" },
      { id: "2-8", text: "There was something strangely beautiful about the way we began. We fell for each other's minds, voices, personalities, and little habits before we ever knew what the other looked like.", type: "body" },
      { id: "2-9", text: "We didn't rush to see each other. We let everything else come first.", type: "body" },
      { id: "2-10", text: "And then came December 17th—the day I finally saw you. I remember looking at you and thinking: 'Oh God... what have you done?'", type: "body" },
      { id: "2-11", text: "How could someone this beautiful have fallen for me without even knowing what I looked like? You looked almost unreal to me.", type: "body" },
      { id: "2-12", text: "But the funny thing was... your face wasn't what made me fall for you. By the time I finally saw you, I'd already fallen for the person behind it.", type: "body", spacing: "large" },
      { id: "2-13", text: "You always laughed the hardest when you were with me. Not the polite little laugh. The completely unfiltered, full-hearted one.", type: "body" },
      { id: "2-14", text: "You've always been kind. Sensitive, sometimes ridiculously sensitive. You feel things deeply, you care deeply, and you never needed to become less soft for that.", type: "body" },
      { id: "2-15", text: "And then there's the fact that you're completely fucking weird.", type: "body" },
      { id: "2-16", text: ["Your expressions.", "Your sudden bursts of energy.", "Your completely random dancing.", "Your questionable jokes."], type: "body" },
      { id: "2-17", text: "Somehow, you managed to be one of the weirdest people I've ever met—and somehow you made me just as weird. I wouldn't have it any other way.", type: "body", spacing: "large" },
      { id: "2-18", text: "pink tissue", type: "interaction", spacing: "large" },
      { id: "2-19", text: "We didn't only dream about some grand, perfect future. Sometimes it was something ridiculously simple.", type: "body" },
      { id: "2-20", text: ["Our own little house.", "A skyline somewhere in the distance.", "A backyard just big enough for us to have chickens running around."], type: "body" },
      { id: "2-21", text: "It wasn't really about the house, or the skyline, or even the chickens. It was about waking up one day and realizing we'd built a little world that belonged to us.", type: "body", spacing: "massive" }
    ]
  },
  {
    id: "act-3",
    title: "Chapter III — When We Lost Our Way",
    blocks: [
      { id: "3-1", text: "Then life changed.", type: "body" },
      { id: "3-2", text: "In 2024, I left home, started working, and suddenly my days became eleven hours of work, exhaustion, and trying to build something for my future.", type: "body" },
      { id: "3-3", text: "There was distance between us, and I didn't understand what that distance was doing to you. The time difference made it harder, and without realizing it, I started giving you less of my time, less attention, and less of the importance you needed to feel from me.", type: "body" },
      { id: "3-4", text: "I was so focused on trying to build a life that I didn't realize I was slowly becoming distant from the person I wanted that life with.", type: "body" },
      { id: "3-5", text: "And by the time I understood how much it hurt you, things had already started falling apart.", type: "body" },
      { id: "3-6", text: "I wish I had understood you then the way I understand you now.", type: "body", spacing: "massive" }
    ]
  },
  {
    id: "act-4",
    title: "The Night We Lost Each Other",
    blocks: [
      { id: "4-1", text: "And then came the part I never wanted to believe would become part of our story.", type: "body" },
      { id: "4-2", text: "Losing you hurt. But it wasn't only you I felt myself losing.", type: "body" },
      { id: "4-3", text: ["I was losing the future I had imagined with you.", "The little house.", "The skyline.", "The backyard.", "The ridiculous chickens."], type: "body" },
      { id: "4-4", text: "All those ordinary little dreams we'd somehow made feel real.", type: "body", spacing: "large" },
      { id: "4-5", text: "I felt like I'd failed you. Like I hadn't given you what you needed when you needed it.", type: "body" },
      { id: "4-6", text: "And I had to live with the silence that came after. With the distance. With knowing that the person who had once been such a huge part of my everyday life was suddenly somewhere else.", type: "body" },
      { id: "4-7", text: "There were days when I missed you. Days when I blamed myself. Days when I wondered whether we'd ever find our way back to each other.", type: "body" },
      { id: "4-8", text: "And some nights, it felt like the life we'd imagined had disappeared with the sunset.", type: "body", spacing: "massive" }
    ]
  },
  {
    id: "act-5",
    title: "The Long Night",
    blocks: [
      { id: "5-1", text: "The truth is, I didn't become wiser immediately.", type: "body" },
      { id: "5-2", text: "I lost myself.", type: "body", spacing: "large" },
      { id: "5-3", text: "When you came back, I was still broken inside. Instead of understanding what had happened, I carried my anger into what we had left.", type: "body" },
      { id: "5-4", text: ["I gave you a hard time.", "I tried to control things.", "I hurt you emotionally, again and again, until eventually you couldn't take it anymore."], type: "body" },
      { id: "5-5", text: "You left, and only then did I truly understand what I'd lost.", type: "body", spacing: "large" },
      { id: "5-6", text: "I thought losing you was the worst thing that could happen to me. But there was something worse. I had started losing myself too.", type: "body" },
      { id: "5-7", text: "I didn't know how to love you without letting fear become control.", type: "body", spacing: "large" },
      { id: "5-8", text: "I didn't know how to carry hurt without turning it into anger.", type: "body", spacing: "large" },
      { id: "5-9", text: "And I didn't understand how much of that weight I was making you carry with me.", type: "body", spacing: "massive" }
    ]
  },
  {
    id: "act-6",
    blocks: [
      { id: "6-1", text: "We found our way back again. And for a while, I thought that was enough.", type: "body" },
      { id: "6-2", text: "But getting someone back isn't the same as becoming someone better.", type: "body" },
      { id: "6-3", text: "I still had things inside me that I hadn't faced. I still had lessons I hadn't truly learned.", type: "body" },
      { id: "6-4", text: "And eventually, life gave us another separation.", type: "body" },
      { id: "6-5", text: "This time, something was different. This time, I could finally see myself clearly.", type: "body", spacing: "massive" }
    ]
  },
  {
    id: "act-7",
    title: "What I Finally Understood",
    blocks: [
      { id: "7-1", text: "I was sad because I lost you.", type: "body" },
      { id: "7-2", text: "But what hurt me even more was realizing that you had to leave me so that I could finally become a better person.", type: "body" },
      { id: "7-3", text: "This time, I understood you. This time, I understood that I needed to change.", type: "body" },
      { id: "7-4", text: "I wasn't the person you deserved to be with. Maybe I'm still not. But I want to try.", type: "body", spacing: "large" },
      { id: "7-5", text: "I know I'm selfish in one way, because even knowing all my flaws, I still want you beside me.", type: "body" },
      { id: "7-6", text: "And I'm so grateful that your heart found a way to give me another chance. I'll never take that chance for granted.", type: "body" },
      { id: "7-7", text: "I'll keep trying to make sure that, someday, you can look back and know that giving me another chance wasn't a mistake.", type: "body" },
      { id: "7-8", text: "You mean the world to me.", type: "quote", spacing: "massive" },
      { id: "7-9", text: "Maybe becoming better was never about getting back what I lost.", type: "body", spacing: "large" },
      { id: "7-10", text: "Maybe it was about becoming someone who could love it better.", type: "body", spacing: "massive" }
    ]
  },
  {
    id: "act-8",
    title: "And Then, We Found Our Way Back",
    blocks: [
      { id: "8-1", text: "When you came back, I was happier than I can really put into words.", type: "body" },
      { id: "8-2", text: "But something in me had changed.", type: "body" },
      { id: "8-3", text: "I don't just want to have you beside me anymore.", type: "body" },
      { id: "8-4", text: ["I want to do everything within my ability to build a life where you have what you need from me—", "whether that's my presence,", "my love,", "a home of our own someday,", "or simply knowing that you don't have to wonder whether I'm there."], type: "body" },
      { id: "8-5", text: "I can't promise that I'll be perfect. I can't promise that I'll always get everything right. But I can promise that I'll keep trying.", type: "body" },
      { id: "8-6", text: "Because this time, I don't want to simply have you back.", type: "body" },
      { id: "8-7", text: "I want to be better at loving you.", type: "quote", spacing: "massive" }
    ]
  },
  {
    id: "act-9",
    title: "Chapter IX — Whatever Comes Next",
    blocks: [
      { id: "9-1", text: "Maybe this is what I've always wanted underneath all the bigger dreams.", type: "body", spacing: "large" },
      { id: "9-2", text: "Not a perfect life.", type: "body", spacing: "large" },
      { id: "9-3", text: "Just an ordinary evening that feels like home.", type: "body", spacing: "large" },
      { id: "9-4", text: ["A summer sunset.", "Our little house.", "You running after our kid because apparently I'm not allowed to sit peacefully and drink my coffee."], type: "body", spacing: "large" },
      { id: "9-5", text: "And me sitting there, smiling at the two of you...", type: "body", spacing: "large" },
      { id: "9-6", text: "thinking about how somehow all the roads we walked brought us here.", type: "body", spacing: "massive" }
    ]
  },
  {
    id: "act-10",
    blocks: [
      { id: "10-1", text: "There's one last thing.", type: "body", spacing: "massive" },
      { id: "10-2", text: "We don't know what our future looks like.", type: "quote", spacing: "large" },
      { id: "10-3", text: "So let's make our own together.", type: "quote", spacing: "large" },
      { id: "10-4", text: "And become one in two bodies.", type: "title", spacing: "large" },
      { id: "10-5", text: "Here's to our next chapter.", type: "body", spacing: "massive" }
    ]
  }
];