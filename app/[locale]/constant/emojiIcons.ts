const emojiIcons = {
    // Faces & Emotions
    smile: "&#128512;",          // 😀
    grin: "&#128513;",           // 😃
    laugh: "&#128514;",          // 😄
    bigSmile: "&#128515;",       // 😁
    sweatSmile: "&#128517;",     // 😅
    joy: "&#128518;",            // 😂
    rofl: "&#129315;",           // 🤣
    wink: "&#128521;",           // 😉
    blush: "&#128522;",          // 😊
    heartEyes: "&#128525;",      // 😍
    kissingHeart: "&#128536;",   // 😘
    thinking: "&#129300;",       // 🤔
    neutral: "&#128528;",        // 😐
    confused: "&#128533;",       // 😕
    sad: "&#128542;",            // 😞
    cry: "&#128546;",            // 😢
    scream: "&#128561;",         // 😱
    angry: "&#128545;",          // 😡
    sleepy: "&#128564;",         // 😴
    sleeping: "&#128554;",       // 😪

    // Gestures
    thumbsUp: "&#128077;",       // 👍
    thumbsDown: "&#128078;",     // 👎
    clap: "&#128079;",           // 👏
    okHand: "&#128076;",         // 👌
    raisedHand: "&#9995;",       // ✋
    victory: "&#9996;",          // ✌️
    wave: "&#128075;",           // 👋
    flex: "&#128170;",           // 💪
    pray: "&#128591;",           // 🙏
    handshake: "&#129309;",      // 🤝

    // People
    man: "&#128104;",            // 👨
    woman: "&#128105;",          // 👩
    boy: "&#128102;",            // 👦
    girl: "&#128103;",           // 👧
    baby: "&#128118;",           // 👶
    olderMan: "&#128116;",       // 👴
    olderWoman: "&#128117;",     // 👵
    student: "&#129489;",        // 🧑‍🎓
    teacher: "&#129488;",        // 🧑‍🏫
    police: "&#128110;",         // 👮

    // Animals
    dog: "&#128054;",            // 🐶
    cat: "&#128049;",            // 🐱
    monkey: "&#128018;",         // 🐒
    fox: "&#129418;",            // 🦊
    panda: "&#128060;",          // 🐼
    tiger: "&#128047;",          // 🐯
    bear: "&#128059;",           // 🐻
    cow: "&#128046;",            // 🐮
    rabbit: "&#128048;",         // 🐰
    lion: "&#129409;",           // 🦁

    // Nature
    sun: "&#9728;",              // ☀️
    cloud: "&#9729;",            // ☁️
    rainbow: "&#127752;",        // 🌈
    snowflake: "&#10052;",       // ❄️
    fire: "&#128293;",           // 🔥
    droplet: "&#128167;",        // 💧
    leaf: "&#127810;",           // 🍂
    tree: "&#127794;",           // 🌲
    cactus: "&#127797;",         // 🌵
    flower: "&#128144;",         // 💐

    // Food & Drink
    apple: "&#127822;",          // 🍎
    banana: "&#127820;",         // 🍌
    watermelon: "&#127817;",     // 🍉
    grapes: "&#127815;",         // 🍇
    burger: "&#127828;",         // 🍔
    pizza: "&#127829;",          // 🍕
    fries: "&#127839;",          // 🍟
    iceCream: "&#127846;",       // 🍦
    cake: "&#127856;",           // 🎂
    coffee: "&#9749;",           // ☕️

    // Objects
    phone: "&#128222;",          // 📞
    laptop: "&#128187;",         // 💻
    lightBulb: "&#128161;",      // 💡
    book: "&#128214;",           // 📖
    clock: "&#128339;",          // 🕓
    key: "&#128273;",            // 🔑
    camera: "&#128247;",         // 📷
    gift: "&#127873;",           // 🎁
    lock: "&#128274;",           // 🔒
    moneyBag: "&#128176;",       // 💰

    // Travel & Places
    car: "&#128663;",            // 🚗
    bus: "&#128652;",            // 🚌
    airplane: "&#9992;",         // ✈️
    train: "&#128646;",          // 🚆
    rocket: "&#128640;",         // 🚀
    boat: "&#128674;",           // 🚢
    globe: "&#127758;",          // 🌎
    tent: "&#9968;",             // ⛺
    trafficLight: "&#128678;",   // 🚦
    house: "&#127968;",          // 🏠

    // Symbols
    heart: "&#10084;",           // ❤️
    star: "&#11088;",            // ⭐
    warning: "&#9888;",          // ⚠️
    checkMark: "&#10004;",       // ✔️
    crossMark: "&#10060;",       // ❌
    recycle: "&#9851;",          // ♻️
    musicNote: "&#127925;",      // 🎵
    question: "&#10067;",        // ❓
    exclamation: "&#10071;",     // ❗
    peace: "&#9774;",             // ☮️

    // Faces
    nerdFace: "&#129299;",             // 🤓
    upsideDown: "&#128579;",           // 🙃
    huggingFace: "&#129303;",          // 🤗
    shushing: "&#129323;",             // 🤫
    smirking: "&#128527;",             // 😏
    expressionless: "&#128529;",       // 😑
    rollingEyes: "&#128580;",          // 🙄
    grimacing: "&#128556;",            // 😬
    pleading: "&#129402;",             // 🥺
    nauseated: "&#129314;",            // 🤢
    vomiting: "&#129326;",             // 🤮
    dizzy: "&#128565;",                // 😵
    faceWithSpiralEyes: "&#129396;",   // 🌀
    moneyMouth: "&#129297;",           // 🤑
    clown: "&#129313;",                // 🤡
    cowboy: "&#129312;",               // 🤠
    robot: "&#129302;",                // 🤖
    skull: "&#128128;",                // 💀
    alien: "&#128125;",                // 👽
    ghost: "&#128123;",                // 👻

    // People & Professions
    artist: "&#129491;",               // 🧑‍🎨
    astronaut: "&#129489;&#8205;&#128640;", // 🧑‍🚀
    scientist: "&#129489;&#8205;&#128300;", // 🧑‍🔬
    chef: "&#129489;&#8205;&#127859;",     // 🧑‍🍳
    judge: "&#129489;&#8205;&#9878;",       // 🧑‍⚖️
    pilot: "&#129489;&#8205;&#9992;",       // 🧑‍✈️
    farmer: "&#129489;&#8205;&#127806;",    // 🧑‍🌾
    mechanic: "&#129489;&#8205;&#128295;",  // 🧑‍🔧
    singer: "&#129489;&#8205;&#127908;",    // 🧑‍🎤

    // Activities
    soccer: "&#9917;",                  // ⚽
    basketball: "&#127936;",           // 🏀
    football: "&#127944;",             // 🏈
    baseball: "&#9918;",               // ⚾
    tennis: "&#127934;",               // 🎾
    bowling: "&#127923;",              // 🎳
    billiards: "&#127921;",            // 🎱
    running: "&#127939;",              // 🏃
    cycling: "&#128692;",              // 🚴
    swimming: "&#127946;",             // 🏊

    // Animals
    elephant: "&#128024;",             // 🐘
    horse: "&#128052;",                // 🐴
    pig: "&#128055;",                  // 🐷
    frog: "&#128056;",                 // 🐸
    mouse: "&#128045;",                // 🐭
    chicken: "&#128020;",              // 🐔
    duck: "&#129414;",                 // 🦆
    owl: "&#129417;",                  // 🦉
    penguin: "&#128039;",              // 🐧
    whale: "&#128051;",                // 🐳

    // Food & Drink
    taco: "&#127790;",                 // 🌮
    burrito: "&#127791;",              // 🌯
    popcorn: "&#127871;",              // 🍿
    donut: "&#127849;",                // 🍩
    cookie: "&#127850;",               // 🍪
    chocolate: "&#127851;",            // 🍫
    honey: "&#127855;",                // 🍯
    sandwich: "&#129386;",             // 🥪
    bento: "&#127857;",                // 🍱
    ramen: "&#127836;",                // 🍜

    // Drinks
    tea: "&#127861;",                  // 🍵
    beer: "&#127866;",                 // 🍺
    wine: "&#127863;",                 // 🍷
    cocktail: "&#127864;",             // 🍸
    sake: "&#127862;",                 // 🍶
    bubbleTea: "&#129483;",            // 🧋
    smoothie: "&#129380;",             // 🥤
    bottle: "&#129347;",               // 🍼
    coffeeToGo: "&#9749;&#65039;",     // ☕️
    milk: "&#129371;",                 // 🥛

    // Objects
    magnet: "&#129522;",               // 🧲
    compass: "&#129517;",              // 🧭
    scissors: "&#9986;",               // ✂️
    pencil: "&#9999;",                 // ✏️
    ruler: "&#128207;",                // 📏
    paperclip: "&#128206;",            // 📎
    toolbox: "&#129520;",              // 🧰
    hammer: "&#128296;",               // 🔨
    wrench: "&#128295;",               // 🔧
    gear: "&#9881;",                   // ⚙️

    // Transportation
    taxi: "&#128661;",                 // 🚕
    bicycle: "&#128690;",              // 🚲
    tram: "&#128651;",                 // 🚋
    metro: "&#128647;",                // 🚇
    helicopter: "&#128641;",           // 🚁
    hotAirBalloon: "&#127880;",        // 🎈
    anchor: "&#9875;",                 // ⚓
    fuelPump: "&#9981;",               // ⛽
    construction: "&#128679;",         // 🚧
    steeringWheel: "&#128664;",        // 🚘

    // Weather & Nature
    volcano: "&#127755;",              // 🌋
    comet: "&#9732;",                  // ☄️
    umbrella: "&#9748;",               // ☔
    snowman: "&#9924;",                // ⛄
    tornado: "&#127786;",              // 🌪️
    cyclone: "&#127744;",              // 🌀
    globeAfrica: "&#127757;",          // 🌍
    globeAsia: "&#127759;",            // 🌏
    globeAmericas: "&#127758;"         // 🌎
};

export default emojiIcons;
