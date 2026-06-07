// ══════════════════════════════════════
// DATA
// ══════════════════════════════════════
const cats = [
  { id: "mandi", name: "مندي", icon: "fa-solid fa-utensils", cnt: 8 },
  { id: "madhbi", name: "مدبي", icon: "fa-solid fa-drumstick-bite", cnt: 6 },
  { id: "zurbian", name: "زربيان", icon: "fa-solid fa-bowl-food", cnt: 4 },
  { id: "grills", name: "مشويات", icon: "fa-solid fa-fire", cnt: 12 },
  { id: "egyptian", name: "وجبات مصرية", icon: "fa-solid fa-egg", cnt: 10 },
  { id: "tagines", name: "طواجن", icon: "fa-solid fa-bowl-food", cnt: 8 },
  { id: "seafood", name: "مأكولات بحرية", icon: "fa-solid fa-fish", cnt: 6 },
  { id: "chicken", name: "دجاج", icon: "fa-solid fa-drumstick-bite", cnt: 10 },
  { id: "trays", name: "تراي عائلي", icon: "fa-solid fa-plate-wheat", cnt: 5 },
  { id: "desserts", name: "حلويات", icon: "fa-solid fa-cake-candles", cnt: 7 },
  { id: "drinks", name: "مشروبات", icon: "fa-solid fa-whiskey-glass", cnt: 9 },
  { id: "appetizers", name: "مقبلات", icon: "fa-solid fa-leaf", cnt: 8 },
];

const prods = [
  {
    id: 1,
    name: "مندي لحم كامل",
    desc: "ربع ضأن كامل مطبوخ بطريقة المندي اليمنية الأصيلة مع الأرز البسمتي المبهر والصوص اليمني",
    price: 380,
    cat: "mandi",
    badge: "الأشهر",
    img: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=600",
    rating: 4.9,
    revs: 342,
    best: true,
    ym: true,
    fomo: "آخر 12 عميل طلبوه اليوم",
  },
  {
    id: 2,
    name: "مندي دجاج كامل",
    desc: "دجاجة كاملة على الطريقة اليمنية مع أرز بسمتي وصوص المندي الخاص",
    price: 165,
    cat: "mandi",
    badge: "الأكثر طلبًا",
    img: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600",
    rating: 4.8,
    revs: 289,
    best: true,
    ym: true,
    fomo: "أكثر طبق طلبًا اليوم",
  },
  {
    id: 3,
    name: "مندي نصف دجاجة",
    desc: "نصف دجاجة مندي مع أرز بسمتي وسلطة وصوص",
    price: 90,
    cat: "mandi",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    rating: 4.7,
    revs: 201,
    ym: true,
  },
  {
    id: 4,
    name: "مندي لحم كيلو",
    desc: "كيلو لحم ضأن مندي مع الأرز البسمتي المبهر",
    price: 195,
    cat: "mandi",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
    rating: 4.8,
    revs: 178,
  },
  {
    id: 5,
    name: "مدبي دجاج",
    desc: "دجاج مدبي على الحجر الساخن بتوابل يمنية خاصة — لذة لا تُقاوَم",
    price: 150,
    cat: "madhbi",
    badge: "جديد",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    rating: 4.9,
    revs: 156,
    best: true,
    ym: true,
    fomo: "أضفناه هذا الأسبوع",
  },
  {
    id: 6,
    name: "مدبي لحم",
    desc: "لحم ضأن مدبي على الأحجار الساخنة بالتوابل اليمنية",
    price: 220,
    cat: "madhbi",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600",
    rating: 4.8,
    revs: 134,
    ym: true,
  },
  {
    id: 7,
    name: "زربيان لحم",
    desc: "أرز بسمتي باللحم والتوابل الخاصة — طبق الأفراح اليمني الأصيل",
    price: 210,
    cat: "zurbian",
    img: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=600",
    rating: 4.7,
    revs: 98,
    ym: true,
  },
  {
    id: 8,
    name: "زربيان دجاج",
    desc: "أرز زربيان بالدجاج والكشمش والمكسرات",
    price: 140,
    cat: "zurbian",
    img: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600",
    rating: 4.6,
    revs: 87,
  },
  {
    id: 9,
    name: "كباب مشكل",
    desc: "تشكيلة من الكباب بالتوابل المصرية — 6 قطع مع خبز وسلطة",
    price: 120,
    cat: "grills",
    badge: "الأشهر",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    rating: 4.9,
    revs: 267,
    best: true,
    eg: true,
    fomo: "أكثر من 50 طلب اليوم",
  },
  {
    id: 10,
    name: "كوفتة مشوية",
    desc: "كوفتة لحم مشوية بالتوابل المصرية الخاصة — 6 أصابع",
    price: 95,
    cat: "grills",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600",
    rating: 4.7,
    revs: 198,
    eg: true,
  },
  {
    id: 11,
    name: "دجاج مشوي كامل",
    desc: "دجاجة كاملة مشوية بالتوابل المميزة مع البطاطس",
    price: 135,
    cat: "grills",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    rating: 4.8,
    revs: 145,
  },
  {
    id: 12,
    name: "ضلوع مشوية",
    desc: "ضلوع ضأن مشوية بالتوابل الخاصة — كيلو كامل",
    price: 280,
    cat: "grills",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
    rating: 4.8,
    revs: 112,
    best: true,
  },
  {
    id: 13,
    name: "فراخ بالقلم",
    desc: "قطع دجاج بصوص الطماطم والفلفل الألوان",
    price: 110,
    cat: "egyptian",
    img: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600",
    rating: 4.6,
    revs: 156,
    eg: true,
  },
  {
    id: 14,
    name: "أرز بالشعرية",
    desc: "أرز مصري بالشعرية — مرفق مع الأطباق الرئيسية",
    price: 30,
    cat: "egyptian",
    img: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=600",
    rating: 4.5,
    revs: 89,
    eg: true,
  },
  {
    id: 15,
    name: "طاجن لحم بالخضار",
    desc: "لحم ضأن طازج مطهو ببطء مع الخضروات الموسمية",
    price: 160,
    cat: "tagines",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
    rating: 4.8,
    revs: 123,
    best: true,
    eg: true,
  },
  {
    id: 16,
    name: "طاجن دجاج بالزيتون",
    desc: "دجاج بزيت الزيتون والزيتون الأخضر والليمون المخلل",
    price: 130,
    cat: "tagines",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    rating: 4.7,
    revs: 98,
    eg: true,
  },
  {
    id: 17,
    name: "سمك بلطي مشوي",
    desc: "سمك بلطي طازج مشوي بالأعشاب والليمون مع صوص طحينة",
    price: 145,
    cat: "seafood",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600",
    rating: 4.7,
    revs: 87,
    eg: true,
  },
  {
    id: 18,
    name: "دجاج محمر",
    desc: "دجاج مقلي بزيت نباتي نظيف حتى الاحمرار مع البهارات",
    price: 125,
    cat: "chicken",
    img: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600",
    rating: 4.7,
    revs: 178,
  },
  {
    id: 19,
    name: "أجنحة بالصوص",
    desc: "أجنحة دجاج مشوية بصوص الثوم والليمون",
    price: 95,
    cat: "chicken",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    rating: 4.6,
    revs: 134,
  },
  {
    id: 20,
    name: "تراي عائلي مندي",
    desc: "مندي لحم + مندي دجاج + أرز + خبز + سلطات — يكفي 4-6 أفراد",
    price: 499,
    cat: "trays",
    badge: "عرض",
    img: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=600",
    rating: 4.9,
    revs: 89,
  },
  {
    id: 21,
    name: "تراي مشويات",
    desc: "تشكيلة مشويات كاملة — كباب + كوفتة + دجاج مشوي + ضلوع",
    price: 420,
    cat: "trays",
    badge: "عرض",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    rating: 4.8,
    revs: 67,
  },
  {
    id: 22,
    name: "بسبوسة بالقشطة",
    desc: "بسبوسة طازجة يومية بالقشطة والمكسرات",
    price: 35,
    cat: "desserts",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600",
    rating: 4.8,
    revs: 145,
  },
  {
    id: 23,
    name: "كنافة بالجبن",
    desc: "كنافة طازجة يومية بجبن الموزاريلا",
    price: 45,
    cat: "desserts",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    rating: 4.9,
    revs: 201,
  },
  {
    id: 24,
    name: "عصير ليمون بالنعناع",
    desc: "عصير ليمون طازج مع النعناع والسكر",
    price: 25,
    cat: "drinks",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600",
    rating: 4.7,
    revs: 189,
  },
  {
    id: 25,
    name: "تمر هندي",
    desc: "مشروب تمر هندي طازج — طبيعي 100%",
    price: 20,
    cat: "drinks",
    img: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600",
    rating: 4.6,
    revs: 156,
  },
  {
    id: 26,
    name: "سلطة فتوش",
    desc: "سلطة خضراء طازجة مع الخضروات الموسمية وصوص الليمون",
    price: 40,
    cat: "appetizers",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    rating: 4.6,
    revs: 112,
  },
  {
    id: 27,
    name: "حمص بالطحينة",
    desc: "حمص ناعم بزيت الزيتون والكمون",
    price: 35,
    cat: "appetizers",
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600",
    rating: 4.7,
    revs: 134,
  },
];

const offers = [
  {
    id: "f1",
    name: "عرض العائلة الكبير",
    desc: "مندي لحم كامل + مندي دجاج كامل + سلطتان + عصيرين + خبز",
    price: 520,
    img: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=600",
    tag: "عرض العائلة",
    disc: "20%",
    serves: "6-8 أفراد",
  },
  {
    id: "f2",
    name: "عرض المشويات المميز",
    desc: "كباب + كوفتة + دجاج مشوي + ضلوع + أرز + خبز + مشروبات",
    price: 450,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    tag: "عرض المجموعات",
    disc: "15%",
    serves: "4-6 أفراد",
  },
  {
    id: "f3",
    name: "عرض الوليمة اليمنية",
    desc: "زربيان لحم + مدبي دجاج + مندي نصف دجاجة + حلوى + مشروبات",
    price: 380,
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    tag: "الأكثر طلبًا",
    disc: "10%",
    serves: "3-4 أفراد",
  },
];

const revsList = [
  {
    name: "أحمد محمود",
    init: "أ",
    loc: "الشيخ زايد",
    stars: 5,
    txt: "المندي هنا لا يُقاوَم! أكلت مندي في أماكن كثيرة في القاهرة لكن واحة اليمن تفوقهم جميعًا. اللحم طري جدًا والأرز مبهر بشكل رائع.",
    date: "قبل أسبوع",
  },
  {
    name: "فاطمة الزهراء",
    init: "ف",
    loc: "المهندسين",
    stars: 5,
    txt: "جربت عرض العائلة مع العائلة وكان رائعًا جدًا! الخدمة سريعة والطلب عبر الواتساب سهل جدًا.",
    date: "قبل 3 أيام",
  },
  {
    name: "محمد السيد",
    init: "م",
    loc: "الشيخ زايد",
    stars: 5,
    txt: "المدبي كان تجربة رائعة! الدجاج محمر بشكل مثالي واللون الذهبي يشتهي. أنصح به بشدة.",
    date: "قبل يومين",
  },
  {
    name: "سارة إبراهيم",
    init: "س",
    loc: "المهندسين",
    stars: 5,
    txt: "طلبت كباب مشكل وطاجن لحم وكلاهما لذيذ جدًا! الأسعار معقولة مقارنة بالجودة.",
    date: "قبل 5 أيام",
  },
  {
    name: "علي حسن",
    init: "ع",
    loc: "الشيخ زايد",
    stars: 4,
    txt: "تجربة ممتازة. المندي لذيذ جدًا والخدمة سريعة. أتمنى زيادة خيارات الحلويات.",
    date: "قبل أسبوع",
  },
  {
    name: "نورا عبدالله",
    init: "ن",
    loc: "المهندسين",
    stars: 5,
    txt: "المطعم يقدم طعام يمني حقيقي وليس نسخة مقلدة. الأرز بالطريقة الأصيلة والتوابل مميزة.",
    date: "قبل 4 أيام",
  },
];

const whyList = [
  {
    icon: "fa-solid fa-drumstick-bite",
    title: "لحوم طازجة يومية",
    desc: "نتعامل مع أفضل الموردين ونضمن طزاجة اللحوم والدجاج يوميًا دون استثناء",
  },
  {
    icon: "fa-solid fa-kitchen-set",
    title: "طهاة يمنيون متخصصون",
    desc: "طواقمنا مدربة على أيدي خبراء من اليمن يضمنون أصالة الطعم",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "طلب سريع عبر واتساب",
    desc: "في ثوانٍ معدودة بدون تطبيق — فقط اضغط وأرسل",
  },
  {
    icon: "fa-solid fa-house-chimney",
    title: "مناسب للعائلات",
    desc: "عروض عائلية مميزة وأجواء مريحة تناسب المجموعات الكبيرة",
  },
  {
    icon: "fa-solid fa-coins",
    title: "أسعار تنافسية",
    desc: "جودة عالية بأسعار معقولة — الطعام الجيد ليس فاخرًا بالضرورة",
  },
  {
    icon: "fa-solid fa-seedling",
    title: "مكونات طبيعية 100%",
    desc: "توابل وأعشاب طبيعية فقط، بدون حافظات أو إضافات صناعية",
  },
  {
    icon: "fa-solid fa-location-dot",
    title: "فرعان في موقعَين مميزَين",
    desc: "الشيخ زايد والمهندسين — دائمًا قريبون منك",
  },
  {
    icon: "fa-solid fa-star",
    title: "تقييم 4.9 من 5",
    desc: "أكثر من 1200 تقييم إيجابي — ثقة عملائنا هي أكبر جائزة",
  },
];

const faqList = [
  {
    q: "كيف يمكنني الطلب؟",
    a: 'الطلب يتم بشكل مباشر عبر واتساب — اضغط زر "اطلب الآن" وستفتح محادثة مع أقرب فرع. يمكنك أيضًا تصفح القائمة، إضافة الأصناف للسلة، ثم إرسال الطلب بضغطة واحدة.',
  },
  {
    q: "هل يتوفر توصيل للمنازل؟",
    a: "نعم! نوفر توصيل للمناطق المحيطة بفرعينا في الشيخ زايد والمهندسين. تكلفة التوصيل تحدد حسب المسافة ويمكن الاستفسار عبر واتساب.",
  },
  {
    q: "ما هي أوقات العمل؟",
    a: "كلا الفرعين يعملان يوميًا من 12:00 ظهرًا حتى 1:00 صباحًا — بدون توقف أيام الأعياد.",
  },
  {
    q: "هل الطعام حلال؟",
    a: "بالطبع! جميع لحومنا حلال 100% وطازجة يوميًا. لا نستخدم أي حافظات أو إضافات صناعية.",
  },
  {
    q: "هل يمكن الطلب مسبقًا للمناسبات؟",
    a: "نعم! نستقبل الطلبات المسبقة للولائم الكبيرة. يرجى التواصل قبل 24 ساعة على الأقل.",
  },
  {
    q: "هل تتوفر عروض خاصة؟",
    a: "نعم! لدينا عروض العائلة الثابتة والعروض الموسمية. تابع صفحاتنا لمعرفة أحدث العروض.",
  },
];

const galData = {
  food: [
    {
      img: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=800",
      alt: "مندي",
    },
    {
      img: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600",
      alt: "مشويات",
    },
    {
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
      alt: "كباب",
    },
    {
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1000",
      alt: "وجبة",
    },
    {
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
      alt: "طبق شرقي",
    },
    {
      img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600",
      alt: "مكملات",
    },
  ],
  restaurant: [
    {
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
      alt: "المطعم",
    },
    {
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      alt: "الجلسات",
    },
    {
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600",
      alt: "الطاولات",
    },
    {
      img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1000",
      alt: "الديكور",
    },
    {
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
      alt: "الأجواء",
    },
    {
      img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600",
      alt: "الإضاءة",
    },
  ],
  kitchen: [
    {
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      alt: "المطبخ",
    },
    {
      img: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=600",
      alt: "التحضير",
    },
    {
      img: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=600",
      alt: "الطبخ",
    },
    {
      img: "https://images.unsplash.com/photo-1564716913060-e5d61d1b8d8e?w=1000",
      alt: "التتبيل",
    },
    {
      img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600",
      alt: "الإعداد",
    },
    {
      img: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=600",
      alt: "الشوي",
    },
  ],
  exp: [
    {
      img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
      alt: "عملاء",
    },
    {
      img: "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600",
      alt: "عائلة",
    },
    {
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600",
      alt: "أصدقاء",
    },
    {
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1000",
      alt: "مجموعة",
    },
    {
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
      alt: "تجربة",
    },
    {
      img: "https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?w=600",
      alt: "وجبة مشتركة",
    },
  ],
};

const fomoMsgs = [
  "آخر 12 عميل طلبوا مندي اللحم الكامل",
  "أكثر طبق طلبًا اليوم: كباب مشكل",
  "فرع الشيخ زايد متاح الآن — اطلب خلال 30 ثانية",
  "العرض العائلي الكبير محجوز مسبقًا ليوم الجمعة",
  "15 عميل جديد أضافوا تقييم 5 نجوم اليوم",
  "فرع المهندسين يقبل طلبات الآن",
  "عرض اليوم: خصم 10% على التراي العائلي",
  "المدبي على الأحجار — متوفر كميات محدودة اليوم",
];

// ══════════════════════════════════════
// STATE
// ══════════════════════════════════════
let cart = [];
let curProd = null;
let modQty = 1;
let branch = "zayed";
let isDark = false;
const WA_Z = "201000000001";
const WA_M = "201000000002";

// ══════════════════════════════════════
// INIT
// ══════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  initHeader();
  initReveal();
  animCounters();
  startTimer();
  renderTicker();
  renderGal("food");
  initExitIntent();
  setTimeout(() => showCoupon(), 18000);
});

function renderAll() {
  renderBest();
  renderOffers();
  renderCats();
  renderFeatured();
  renderRevs();
  renderWhy();
  renderFAQ();
  buildMenu();
}

// ══════════════════════════════════════
// BRANCH
// ══════════════════════════════════════
function selectBranchPopup(b, el) {
  branch = b;
  document.getElementById("branchPopup").classList.add("hidden");
  document.getElementById("hdrBranchName").textContent =
    b === "zayed" ? "الشيخ زايد" : "المهندسين";
  showToast('<i class="fa-solid fa-check-circle" style="color:var(--ok)"></i> تم اختيار فرع ' + (b === "zayed" ? "الشيخ زايد" : "المهندسين"));
}

function switchMenuBranch(el, b) {
  branch = b;
  document.querySelectorAll(".brp").forEach((p) => p.classList.remove("act"));
  el.classList.add("act");
  document.getElementById("hdrBranchName").textContent =
    b === "zayed" ? "الشيخ زايد" : "المهندسين";
}

// ══════════════════════════════════════
// HEADER
// ══════════════════════════════════════
function initHeader() {
  const h = document.getElementById("hdr");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 60) {
        h.classList.add("scrolled");
        h.classList.remove("transparent");
      } else if (document.getElementById("home-pg").classList.contains("act")) {
        h.classList.remove("scrolled");
        h.classList.add("transparent");
      }
    },
    { passive: true },
  );
}
function toggleMobNav() {
  const n = document.getElementById("mobNav"),
    b = document.getElementById("hamburger");
  n.classList.toggle("open");
  b.classList.toggle("open");
  document.body.style.overflow = n.classList.contains("open") ? "hidden" : "";
}
function toggleDark() {
  isDark = !isDark;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "");
  const icon = document.getElementById("darkIcon");
  icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

// ══════════════════════════════════════
// PAGE NAV
// ══════════════════════════════════════
function showPg(p) {
  document.querySelectorAll(".pg").forEach((x) => x.classList.remove("act"));
  document.getElementById(p + "-pg").classList.add("act");
  window.scrollTo({ top: 0, behavior: "smooth" });
  const h = document.getElementById("hdr");
  if (p === "home") {
    h.classList.add("transparent");
    h.classList.remove("scrolled");
  } else {
    h.classList.remove("transparent");
    h.classList.add("scrolled");
  }
  document.querySelectorAll(".nav-a").forEach((l) => l.classList.remove("act"));
  const al = document.querySelector(`.nav-a[onclick*="${p}"]`);
  if (al) al.classList.add("act");
}
function scrollSec(id) {
  showPg("home");
  setTimeout(() => {
    const e = document.getElementById(id);
    if (e) e.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 120);
}

// ══════════════════════════════════════
// TICKER
// ══════════════════════════════════════
function renderTicker() {
  const c = document.getElementById("tickerInner");
  const quad = [...fomoMsgs, ...fomoMsgs, ...fomoMsgs, ...fomoMsgs];
  c.innerHTML = quad
    .map(
      (m) =>
        `<div class="ticker-item"><i class="fa-solid fa-circle ticker-dot"></i>${m}</div>`,
    )
    .join("");
}

// ══════════════════════════════════════
// TIMER (FOMO countdown)
// ══════════════════════════════════════
function startTimer() {
  const end = new Date();
  end.setHours(23, 59, 59, 0);
  function tick() {
    const now = new Date(),
      diff = end - now;
    if (diff <= 0) {
      document.getElementById("countdown").textContent = "00:00:00";
      return;
    }
    const h = Math.floor(diff / 3600000),
      m = Math.floor((diff % 3600000) / 60000),
      s = Math.floor((diff % 60000) / 1000);
    document.getElementById("countdown").textContent =
      String(h).padStart(2, "0") +
      ":" +
      String(m).padStart(2, "0") +
      ":" +
      String(s).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

// ══════════════════════════════════════
// RENDER FUNCTIONS
// ══════════════════════════════════════
function pCardHTML(p, d = 0) {
  return `<div class="pcard reveal reveal-d${(d % 4) + 1}" onclick="openMod(${p.id})" role="button" tabindex="0" aria-label="${p.name}">
    <div class="pcard-img">
      <img src="${p.img}&auto=format&fit=crop&w=400" alt="${p.name}" loading="lazy"/>
      ${p.badge ? `<div class="pbadge ${p.badge === "جديد" ? "new" : p.badge === "الأشهر" ? "hot" : ""}">${p.badge}</div>` : ""}
      ${p.fomo ? `<div class="pfomo"><span class="pfomo-fire"><i class="fa-solid fa-fire"></i></span>${p.fomo}</div>` : ""}
    </div>
    <div class="pcard-body">
      <div class="prating"><span class="pstars">${"★".repeat(5)}</span><span class="pcnt">(${p.revs})</span></div>
      <div class="pname">${p.name}</div>
      <div class="pdesc">${p.desc}</div>
      <div class="pfoot">
        <div class="pprice">${p.price} <span>جنيه</span></div>
        <button class="add-btn" onclick="event.stopPropagation();addToCart(${p.id},event)" aria-label="أضف للسلة">+</button>
      </div>
    </div>
  </div>`;
}

function renderBest() {
  document.getElementById("bestGrid").innerHTML = prods
    .filter((p) => p.best)
    .slice(0, 4)
    .map((p, i) => pCardHTML(p, i))
    .join("");
  reObserve();
}

function renderOffers() {
  document.getElementById("offersGrid").innerHTML = offers
    .map(
      (o, i) => `
  <div class="ocard reveal reveal-d${i + 1}" onclick="orderOfferWA('${o.name}',${o.price})">
    <div class="ocard-disc">خصم<br/>${o.disc}</div>
    <div class="ocard-img"><img src="${o.img}&auto=format&fit=crop&w=600" alt="${o.name}" loading="lazy"/></div>
    <div class="ocard-body">
      <div class="otag">${o.tag} · ${o.serves}</div>
      <div class="oname">${o.name}</div>
      <div class="odesc">${o.desc}</div>
      <div class="oprow">
        <div class="oprice">${o.price} <span class="cur">جنيه</span></div>
        <button class="octa" onclick="event.stopPropagation();orderOfferWA('${o.name}',${o.price})">اطلب الآن</button>
      </div>
    </div>
  </div>`,
    )
    .join("");
  reObserve();
}

function renderCats() {
  document.getElementById("catsGrid").innerHTML = cats
    .map(
      (c, i) => `
  <div class="ccat reveal reveal-d${(i % 4) + 1}" onclick="goToCat('${c.id}')" role="button" tabindex="0">
    <span class="ccat-icon"><i class="${c.icon}"></i></span>
    <div class="ccat-name">${c.name}</div>
    <div class="ccat-cnt">${c.cnt} صنف</div>
  </div>`,
    )
    .join("");
  reObserve();
}

function renderFeatured() {
  const ym = prods.filter((p) => p.ym).slice(0, 3);
  const eg = prods.filter((p) => p.eg).slice(0, 3);
  document.getElementById("yemeniItems").innerHTML = ym
    .map(
      (p) => `
  <div class="fi" onclick="openMod(${p.id})">
    <div class="fi-img"><img src="${p.img}&auto=format&fit=crop&w=200" alt="${p.name}" loading="lazy"/></div>
    <div style="flex:1"><div class="fi-name">${p.name}</div><div class="fi-desc">${p.desc}</div></div>
    <div class="fi-price">${p.price} جنيه</div>
  </div>`,
    )
    .join("");
  document.getElementById("egyptianItems").innerHTML = eg
    .map(
      (p) => `
  <div class="fi" onclick="openMod(${p.id})">
    <div class="fi-img"><img src="${p.img}&auto=format&fit=crop&w=200" alt="${p.name}" loading="lazy"/></div>
    <div style="flex:1"><div class="fi-name">${p.name}</div><div class="fi-desc">${p.desc}</div></div>
    <div class="fi-price">${p.price} جنيه</div>
  </div>`,
    )
    .join("");
}

function renderRevs() {
  document.getElementById("revsGrid").innerHTML = revsList
    .map(
      (r, i) => `
  <div class="rcard reveal reveal-d${(i % 3) + 1}">
    <div class="rcard-stars">${"★".repeat(r.stars)}</div>
    <p class="rcard-txt">"${r.txt}"</p>
    <div class="reviewer"><div class="rev-av">${r.init}</div><div><div class="rev-name">${r.name}</div><div class="rev-meta"><i class="fa-solid fa-location-dot" style="font-size:10px;color:var(--go)"></i> ${r.loc} · ${r.date}</div></div></div>
  </div>`,
    )
    .join("");
  reObserve();
}

function renderWhy() {
  document.getElementById("whyGrid").innerHTML = whyList
    .map(
      (w, i) => `
  <div class="why-card reveal reveal-d${(i % 4) + 1}">
    <div class="why-icon"><i class="${w.icon}"></i></div>
    <h3 class="why-title">${w.title}</h3>
    <p class="why-desc">${w.desc}</p>
  </div>`,
    )
    .join("");
  reObserve();
}

function renderFAQ() {
  document.getElementById("faqList").innerHTML = faqList
    .map(
      (f, i) => `
  <div class="faq-item" id="fq${i}">
    <button class="faq-q" onclick="togFAQ(${i})"><span>${f.q}</span><span class="faq-ic">+</span></button>
    <div class="faq-ans"><p>${f.a}</p></div>
  </div>`,
    )
    .join("");
}
function togFAQ(i) {
  const it = document.getElementById("fq" + i),
    was = it.classList.contains("open");
  document
    .querySelectorAll(".faq-item")
    .forEach((e) => e.classList.remove("open"));
  if (!was) it.classList.add("open");
}

// ──────────────────────────────
// GALLERY
// ──────────────────────────────
function renderGal(tab) {
  const items = galData[tab] || galData.food;
  document.getElementById("galGrid").innerHTML = items
    .map(
      (g, i) => `
  <div class="gitem" onclick="openLB('${g.img}')">
    <img src="${g.img}&auto=format&fit=crop&w=600" alt="${g.alt}" loading="lazy"/>
    <div class="gov"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
  </div>`,
    )
    .join("");
}
function switchGalTab(tab, el) {
  document.querySelectorAll(".gtab").forEach((t) => t.classList.remove("act"));
  el.classList.add("act");
  renderGal(tab);
}

// ──────────────────────────────
// MENU PAGE
// ──────────────────────────────
function buildMenu() {
  document.getElementById("menuSide").innerHTML = cats
    .map(
      (c) => `
  <div class="side-item" id="sb-${c.id}" onclick="setActCat('${c.id}');scrollToMenuSec('${c.id}')">
    <span class="side-item-icon"><i class="${c.icon}"></i></span><span>${c.name}</span>
  </div>`,
    )
    .join("");

  const main = document.getElementById("menuMain");
  main.innerHTML = cats
    .map((cat) => {
      const items = prods.filter((p) => p.cat === cat.id);
      if (!items.length) return "";
      return `<div class="menu-sec" id="ms-${cat.id}">
      <h2 class="menu-sec-t"><span><i class="${cat.icon}"></i></span>${cat.name}</h2>
      <div class="menu-grid">${items.map((p) => miCardHTML(p)).join("")}</div>
    </div>`;
    })
    .join("");
}
function miCardHTML(p) {
  return `<div class="mi-card" onclick="openMod(${p.id})">
    <div class="mi-img">
      <img src="${p.img}&auto=format&fit=crop&w=400" alt="${p.name}" loading="lazy"/>
      ${p.badge ? `<div class="pbadge" style="position:absolute;top:8px;right:8px;font-size:9px">${p.badge}</div>` : ""}
    </div>
    <div class="mi-body">
      <div class="mi-name">${p.name}</div>
      <div class="mi-desc">${p.desc}</div>
      <div class="mi-foot">
        <div class="mi-price">${p.price} جنيه</div>
        <button class="mi-add" onclick="event.stopPropagation();addToCart(${p.id},event)">+ أضف</button>
      </div>
    </div>
  </div>`;
}
function setActCat(id) {
  document
    .querySelectorAll(".side-item")
    .forEach((e) => e.classList.remove("act"));
  const sb = document.getElementById("sb-" + id);
  if (sb) sb.classList.add("act");
}
function scrollToMenuSec(id) {
  const s = document.getElementById("ms-" + id);
  if (s) s.scrollIntoView({ behavior: "smooth", block: "start" });
}
function goToCat(id) {
  showPg("menu");
  setTimeout(() => {
    setActCat(id);
    scrollToMenuSec(id);
  }, 160);
}

// SEARCH with autocomplete
function filterMenu() {
  const q = document.getElementById("menuSrch").value.trim().toLowerCase();
  const sugg = document.getElementById("srchSugg");
  let hasAny = false;

  if (q.length >= 2) {
    const matches = prods
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q),
      )
      .slice(0, 5);
    if (matches.length) {
      sugg.innerHTML = matches
        .map(
          (p) => `
        <div class="srch-sugg-item" onclick="openMod(${p.id});sugg.classList.remove('show')">
          <div class="srch-sugg-img"><img src="${p.img}&auto=format&fit=crop&w=80" alt="${p.name}"/></div>
          <div><div style="font-weight:700;font-size:13px">${p.name}</div><div style="font-size:11px;color:var(--tx-l)">${p.price} جنيه</div></div>
        </div>`,
        )
        .join("");
      sugg.classList.add("show");
    } else {
      sugg.innerHTML = `<div class="srch-sugg-item"><div style="color:var(--tx-l)">لم نجد نتائج — <strong onclick="orderWA('');sugg.classList.remove('show')" style="color:var(--br);cursor:pointer">تحدث معنا على واتساب</strong></div></div>`;
      sugg.classList.add("show");
    }
  } else {
    sugg.classList.remove("show");
  }
}

// ══════════════════════════════════════
// CART
// ══════════════════════════════════════
function addToCart(id, e) {
  if (e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const r = document.createElement("span");
    r.className = "ripple-el";
    r.style.width = r.style.height = "60px";
    r.style.left = rect.width / 2 - 30 + "px";
    r.style.top = rect.height / 2 - 30 + "px";
    e.currentTarget.appendChild(r);
    setTimeout(() => r.remove(), 700);
  }
  const p = prods.find((x) => x.id === id);
  if (!p) return;
  const ex = cart.find((x) => x.id === id);
  if (ex) {
    ex.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  updateCartUI();
  showToast("تمت إضافة " + p.name + " إلى السلة");
}
function updateCartUI() {
  const cnt = cart.reduce((a, b) => a + b.qty, 0);
  const el = document.getElementById("cartCount");
  el.textContent = cnt;
  el.style.display = cnt ? "flex" : "none";

  const bdy = document.getElementById("cartBdy");
  const ft = document.getElementById("cartFt");
  if (!cart.length) {
    bdy.innerHTML =
      '<div class="cart-empty"><i class="fa-solid fa-bag-shopping" style="font-size:48px;opacity:0.3"></i><span>سلة طلبك فارغة</span><span style="font-size:13px">تصفح القائمة وأضف ما تشتهي</span></div>';
    ft.style.display = "none";
    return;
  }
  ft.style.display = "block";
  bdy.innerHTML = cart
    .map(
      (c) => `
  <div class="cart-item">
    <div class="ci-img"><img src="${c.img}&auto=format&fit=crop&w=150" alt="${c.name}"/></div>
    <div class="ci-info">
      <div class="ci-name">${c.name}</div>
      <div class="ci-price">${c.price} جنيه</div>
      <div class="ci-qty">
        <button class="cq-btn" onclick="chCartQty(${c.id},-1)">−</button>
        <span class="cq-val">${c.qty}</span>
        <button class="cq-btn" onclick="chCartQty(${c.id},1)">+</button>
      </div>
    </div>
    <button class="ci-rm" onclick="rmCart(${c.id})"><i class="fa-solid fa-trash-can"></i></button>
  </div>`,
    )
    .join("");
  const sub = cart.reduce((a, b) => a + b.price * b.qty, 0);
  document.getElementById("cartSub").textContent = sub + " جنيه";
  document.getElementById("cartTot").textContent = sub + " جنيه";
}
function chCartQty(id, d) {
  const c = cart.find((x) => x.id === id);
  if (!c) return;
  c.qty += d;
  if (c.qty <= 0) cart = cart.filter((x) => x.id !== id);
  updateCartUI();
}
function rmCart(id) {
  cart = cart.filter((x) => x.id !== id);
  updateCartUI();
}
function toggleCart() {
  const bk = document.getElementById("cartBk"),
    dr = document.getElementById("cartDrw");
  const isOpen = bk.classList.contains("open");
  bk.classList.toggle("open");
  dr.classList.toggle("open");
  document.body.style.overflow = isOpen ? "" : "hidden";
}
function checkout() {
  if (!cart.length) return showToast("السلة فارغة — أضف أطباقًا أولًا");
  let msg = "🛒 طلب جديد من " + (branch === "zayed" ? "الشيخ زايد" : "المهندسين") + "\n\n";
  cart.forEach((c) => {
    msg += `• ${c.name} ×${c.qty} = ${c.price * c.qty} ج\n`;
  });
  msg += `\n💵 *الإجمالي:* ${cart.reduce((a, b) => a + b.price * b.qty, 0)} ج`;
  const n = document.getElementById("cartNotes").value.trim();
  if (n) msg += `\n📝 *ملاحظات:* ${n}`;
  msg += `\n📍 الفرع: ${branch === "zayed" ? "الشيخ زايد" : "المهندسين"}`;
  const wa = branch === "zayed" ? WA_Z : WA_M;
  window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank");
  toggleCart();
}

// ══════════════════════════════════════
// MODAL
// ══════════════════════════════════════
function openMod(id) {
  const p = prods.find((x) => x.id === id);
  if (!p) return;
  curProd = p;
  modQty = 1;
  document.getElementById("mImg").src = p.img + "&auto=format&fit=crop&w=740";
  document.getElementById("mImg").alt = p.name;
  document.getElementById("mCat").textContent = (cats.find((c) => c.id === p.cat) || {}).name || "";
  document.getElementById("mName").textContent = p.name;
  document.getElementById("mDesc").textContent = p.desc;
  document.getElementById("mPrice").innerHTML = p.price + ' <small>جنيه</small>';
  document.getElementById("mQty").textContent = "1";
  document.getElementById("prodModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeMod(e) {
  if (e && e.target !== e.currentTarget) return;
  document.getElementById("prodModal").classList.remove("open");
  document.body.style.overflow = "";
}
function chQty(d) {
  modQty = Math.max(1, modQty + d);
  document.getElementById("mQty").textContent = modQty;
}
function addFromMod() {
  if (!curProd) return;
  for (let i = 0; i < modQty; i++) {
    const ex = cart.find((x) => x.id === curProd.id);
    if (ex) ex.qty++;
    else cart.push({ ...curProd, qty: 1 });
  }
  updateCartUI();
  showToast("تمت إضافة " + curProd.name + " (" + modQty + ") إلى السلة");
  closeMod();
}
function orderFromMod() {
  if (!curProd) return;
  const wa = branch === "zayed" ? WA_Z : WA_M;
  const msg =
    "🛒 طلب: " +
    curProd.name +
    " ×" +
    modQty +
    " = " +
    curProd.price * modQty +
    " ج\n📍 " +
    (branch === "zayed" ? "الشيخ زايد" : "المهندسين");
  window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank");
  closeMod();
}

// ══════════════════════════════════════
// ORDER WA
// ══════════════════════════════════════
function orderWA(extra) {
  const wa = branch === "zayed" ? WA_Z : WA_M;
  const msg = extra || "مرحباً، أريد الطلب من " + (branch === "zayed" ? "فرع الشيخ زايد" : "فرع المهندسين");
  window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank");
}
function orderOfferWA(name, price) {
  const wa = branch === "zayed" ? WA_Z : WA_M;
  const msg = "مرحباً، أريد عرض " + name + " بسعر " + price + " ج";
  window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank");
}

// ══════════════════════════════════════
// COUPON
// ══════════════════════════════════════
function showCoupon() {
  document.getElementById("coupon-pop").classList.add("open");
}
function closeCoupon() {
  document.getElementById("coupon-pop").classList.remove("open");
}
function submitCoupon() {
  const name = document.getElementById("coupName").value.trim();
  const phone = document.getElementById("coupPhone").value.trim();
  if (!name || !phone) return showToast("من فضلك أدخل الاسم ورقم الهاتف");
  document.getElementById("coupForm").style.display = "none";
  document.getElementById("coupCode").classList.add("show");
  showToast('<i class="fa-solid fa-gift" style="color:var(--go)"></i> تم إنشاء كود الخصم!');
}
function orderWithCoupon() {
  const wa = branch === "zayed" ? WA_Z : WA_M;
  const msg = "مرحباً، كود الخصم الخاص بي: WAHATA10 — أريد الطلب من " + (branch === "zayed" ? "فرع الشيخ زايد" : "فرع المهندسين");
  window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank");
  closeCoupon();
}

// Exit‑intent coupon
function initExitIntent() {
  let shown = false;
  document.addEventListener("mouseleave", (e) => {
    if (shown || e.clientY > 0 || !document.getElementById("home-pg").classList.contains("act")) return;
    shown = true;
    showCoupon();
  });
}

// ══════════════════════════════════════
// COUNTERS
// ══════════════════════════════════════
function animCounters() {
  const els = document.querySelectorAll("[data-target]");
  if (!els.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target,
            t = +el.dataset.target,
            dur = 1800,
            step = Math.max(1, Math.floor(t / 60));
          let cur = 0;
          const iv = setInterval(() => {
            cur += step;
            if (cur >= t) {
              el.textContent = t;
              clearInterval(iv);
            } else el.textContent = cur;
          }, dur / (t / step));
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  els.forEach((el) => obs.observe(el));
}

// ══════════════════════════════════════
// REVEAL ON SCROLL
// ══════════════════════════════════════
const ro = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
function initReveal() {
  document.querySelectorAll(".reveal").forEach((el) => ro.observe(el));
}
function reObserve() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => ro.observe(el));
}

// ══════════════════════════════════════
// TOAST
// ══════════════════════════════════════
function showToast(msg) {
  const t = document.getElementById("toast");
  t.innerHTML = msg;
  t.classList.add("show");
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove("show"), 2600);
}

// ══════════════════════════════════════
// LIGHTBOX
// ══════════════════════════════════════
function openLB(src) {
  document.getElementById("lbImg").src = src;
  document.getElementById("lightbox").classList.add("open");
}
function closeLB() {
  document.getElementById("lightbox").classList.remove("open");
}

// ══════════════════════════════════════
// KEYBOARD SHORTCUTS
// ══════════════════════════════════════
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMod();
    closeLB();
    toggleCart();
    if (document.getElementById("mobNav").classList.contains("open"))
      toggleMobNav();
  }
});