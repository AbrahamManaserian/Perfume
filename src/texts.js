export function getText(text, language, data) {
  if (language === '1') {
    return data[text].am;
  } else if (language === '2') {
    return data[text].en;
  } else {
    return data[text].ru;
  }
}

export const barText = {
  home: {
    am: 'Գլխավոր',
    en: 'home',
    ru: 'главная',
  },
  about: {
    en: 'About',
    ru: 'О нас',
    am: 'Մեր մասին',
  },
  news: {
    en: 'News',
    ru: 'Новости',
    am: 'Նորություններ',
  },
  signIn: {
    en: 'Sign in',
    ru: 'Войти',
    am: 'Մուտք',
  },
  signUp: {
    en: 'Sign up',
    ru: 'Зарегистрироваться',
    am: 'Գրանցվել',
  },
};

export const textSideBar = {
  brands: {
    en: 'Brands',
    ru: 'Бренды',
    am: 'Բրենդներ',
  },
  news: {
    en: 'News',
    ru: 'Новинки',
    am: 'Նորություններ',
  },
  offers: {
    en: 'Offers',
    ru: 'Предложения',
    am: 'Առաջարկներ',
  },
  men: {
    en: 'Men',
    ru: 'Для мужчин',
    am: 'Տղամարդկանց',
  },
  women: {
    en: 'Women',
    ru: 'Для женщин',
    am: 'Կանացի',
  },
  uni: {
    en: 'Unisex',
    ru: 'Унисекс',
    am: 'Յունիսեքս',
  },
  cosmetics: {
    en: 'Cosmetics',
    ru: 'Косметика',
    am: 'Կոսմետիկա',
  },
  face: {
    en: 'Face',
    ru: 'Лицо',
    am: 'Դեմք',
  },
  eyes: {
    en: 'Eyes',
    ru: 'Глаза',
    am: 'Աչքեր',
  },
  lips: {
    en: 'Lips',
    ru: 'Губы',
    am: 'Շրթունքներ',
  },
  nails: {
    en: 'Nails',
    ru: 'Ногти',
    am: 'Եղունգներ',
  },
  manicure: {
    en: 'Manicure',
    ru: 'Маникюр',
    am: 'Մանիկյուր',
  },
  cleansers: {
    en: 'Cleansers',
    ru: 'Демакияж',
    am: 'Մաքրող միջոց',
  },
  perfume: {
    en: 'Perfume',
    ru: 'Духи',
    am: 'Օծանելիք',
  },
  password: {
    en: 'Password',
    ru: 'Пароль',
    am: 'Գաղտնաբառ',
  },
  overview: {
    en: 'Overview',
    ru: 'Обзор',
    am: 'Ընդհանուր',
  },
  shops: {
    en: 'Shops',
    ru: 'Магазины',
    am: 'Խանութներ',
  },
  sales: {
    en: 'Sales',
    ru: 'Скидки',
    am: 'Զեղչեր',
  },
  local: {
    en: 'Local',
    ru: 'Местный',
    am: 'Տեղական',
  },
  products: {
    en: 'Products',
    ru: 'Продукты',
    am: 'Ապրանքներ',
  },
  shoes: {
    en: 'Shoes',
    ru: 'Обувь',
    am: 'Կոշիկներ',
  },
  summer: {
    en: 'Summer',
    ru: 'Лето',
    am: 'Ամառ',
  },
  winter: {
    en: 'Winter',
    ru: 'Зимняя',
    am: 'Ձմեռ',
  },
  spring: {
    en: 'Spring',
    ru: 'Весна',
    am: 'Գարուն',
  },
  autumn: {
    en: 'Autumn',
    ru: 'Осень',
    am: 'Աշուն',
  },
  all: {
    en: 'All',
    ru: 'Все',
    am: 'Բոլորը',
  },
  slippers: {
    en: 'Slippers',
    ru: 'Тапочки',
    am: 'Հողաթափ',
  },
  women: {
    en: 'Women',
    ru: 'Женская',
    am: 'Կանացի',
  },
  men: {
    en: 'Men',
    ru: 'Мужская',
    am: 'Տղամարդու',
  },
  inserts: {
    en: 'Inserts',
    ru: 'Вставки',
    am: 'Ներդիրներ',
  },
  careItems: {
    en: 'Care Items',
    ru: 'Для ухода',
    am: 'Կոշիկի խնամք',
  },
  details: {
    en: 'Details',
    ru: 'Подробно',
    am: 'Մանրամասն',
  },
  social: {
    en: 'Social',
    ru: 'Соц-сети',
    am: 'Սոց-ցանց',
  },
  about: {
    en: 'About',
    ru: 'О нас',
    am: 'Մեր մասին',
  },
  contacts: {
    en: 'Contacts',
    ru: 'Контакты',
    am: 'Կոնտակտներ',
  },
  help: {
    en: 'Help',
    ru: 'Помощь',
    am: 'Օգնություն',
  },
  password: {
    en: 'Password',
    ru: 'Пароль',
    am: 'Գաղտնաբառ',
  },
  password: {
    en: 'Password',
    ru: 'Пароль',
    am: 'Գաղտնաբառ',
  },
};

export const textSignInUp = {
  signIn: {
    en: 'Sign in',
    ru: 'Войти',
    am: 'Մուտք',
  },
  logOut: {
    en: 'Log out',
    ru: 'Выйти',
    am: 'Դուրս գալ',
  },
  favorite: {
    en: 'Favorite',
    ru: 'Избранное',
    am: 'Նախընտրած',
  },
  myAccount: {
    en: 'My account',
    ru: 'Моя страница',
    am: 'Իմ էջը',
  },
  email: {
    en: 'Email Address',
    ru: 'Электронная почта',
    am: 'Էլեկտրոնային հասցե',
  },
  error: {
    en: 'Incorrect e-mail or password.',
    ru: 'Неверный адрес электронной почты или пароль.',
    am: 'Սխալ էլ. փոստ կամ գաղտնաբառ:',
  },
  passwardError: {
    en: 'The password is weak or missing.',
    ru: 'Пароль слабый или отсутствует.',
    am: 'Գաղտնաբառը թույլ է կամ բացակայում է:',
  },
  invalidEmail: {
    en: 'Incorrect e-mail.',
    ru: 'Неверный адрес электронной почты.',
    am: 'Սխալ էլ. փոստ:',
  },
  usedEmail: {
    en: 'Email address is already in use.',
    ru: 'Этот электронный адрес уже занят.',
    am: 'էլ. հասցեն արդեն զբաղված է:',
  },
  password: {
    en: 'Password',
    ru: 'Пароль',
    am: 'Գաղտնաբառ',
  },
  remember: {
    en: 'Password',
    ru: 'Запомнить меня',
    am: 'Հիշիր ինձ',
  },
  signInGoogle: {
    en: ' Sign in with Google',
    ru: 'Войти через Google',
    am: 'Մուտք գործեք Google-ով',
  },
  forgotPassword: {
    en: 'Forgot password?',
    ru: 'Забыли пароль?',
    am: 'Մոռացել եք գաղտնաբառը?',
  },
  noAcount: {
    en: "Don't have an account? Sign Up",
    ru: 'У вас нет аккаунта? Зарегистрироваться',
    am: 'Չունե՞ք հաշիվ: Գրանցվել',
  },
  signUp: {
    en: 'Sign up',
    ru: 'Зарегистрироваться',
    am: 'Գրանցվել',
  },
  name: {
    en: 'First Name',
    ru: 'Имя',
    am: 'Անուն',
  },
  srName: {
    en: 'Last Name',
    ru: 'Фамилия',
    am: 'Ազգանուն',
  },
  getNot: {
    en: 'I want to receive inspiration, marketing promotions and updates via email.',
    ru: 'Я хочу получать маркетинговые акции и обновления по электронной почте.',
    am: 'Ես ուզում եմ ստանալ  մարքեթինգային առաջխաղացումներ և թարմացումներ էլփոստի միջոցով:',
  },
  signUpGoogle: {
    en: 'Sign up with Google',
    ru: 'Зарегистрируйтесь в Google',
    am: 'Գրանցվեք Google-ի հետ',
  },
  haveAccount: {
    en: 'Already have an account? Sign in',
    ru: 'У вас уже есть аккаунт? Войти',
    am: 'Արդեն ունեք հաշիվ? Մուտք գործել',
  },
  //   srName: {
  //     en: 'Last Name *',
  //     ru: 'Фамилия *',
  //     am: 'Ազգանուն *',
  //   },
};
export const textHomePage = {
  headBig: {
    en: '20% Off For Your First Shopping',
    ru: 'Скидка 20% на первую покупку',
    am: '20% զեղչ առաջին գնման համար',
  },
  headSmall: {
    en: 'FREE Delivery in every City of Armenia. Easy Return, Exchange and Refund Policy',
    ru: 'БЕСПЛАТНАЯ доставка в любой город Армении. Простая политика возврата, обмена и возврата',
    am: 'ԱՆՎՃԱՐ առաքում Հայաստանի բոլոր քաղաքներում։ Հեշտ վերադարձի, փոխանակման և փոխհատուցման քաղաքականություն',
  },
  headButton: {
    en: 'Shop Now',
    ru: 'Купить',
    am: 'Գնեք հիմա',
  },

  bestOffer: {
    en: 'Choose The Best for You',
    ru: 'Выбери лучшее для себя',
    am: 'Ընտրիր լավագույնը քեզ համար',
  },
  topBrands: {
    en: 'Top Brands',
    ru: 'Лучшие бренды',
    am: 'Թոփ բրենդներ',
  },
};

export const textSlideCarousel = {
  flashDeals: {
    en: 'Flash Deals',
    ru: 'Горящие предложения',
    am: 'Թեժ առաջարկներ',
  },
  currency: {
    en: 'AMD',
    ru: 'драм',
    am: 'դրամ',
  },
};
export const textSlideCarousel3Items = {
  head: {
    en: 'A Gift for a Loved One',
    ru: 'Подарок любимому',
    am: 'Նվեր սիրելիին',
  },
};
export const textSlideCarouselSmall = {
  head: {
    en: 'Best Sellers',
    ru: 'Бестселлеры',
    am: 'Բեսթսելերներ',
  },
  viewAll: {
    en: 'View all',
    ru: 'Все',
    am: 'Բոլորը',
  },
};

export const textCopartCars = {
  cars: {
    en: 'Cars',
    ru: 'Автомобили',
    am: 'Ավտոմեքենաներ',
  },
};
