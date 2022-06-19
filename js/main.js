const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomInteger(0, 3);

const getLengthComparison = (line, maxLineLength) => line.length <= maxLineLength;
getLengthComparison('Javascript is fun!', 140);

const DESCRIPTIONS = [
  'Концептуальная фотография',
  'Туристическая фотография',
  'Пейзажная фотография',
  'Рекламная фотография',
  'Свадебная фотография',
  'HDR-фотография',
  'Аэрофотография',
  'Уличная фотография',
  'Спортивная фотография',
  'Портретная фотография',
  'Предметная фотография',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александр',
  'Елена',
  'Роман',
  'Виктория',
  'Дмитрий',
  'Ариша',
];

const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;
const SIMILAR_COMMENTS_COUNT = 2;
const idArray = Array.from({length:25}, (_, i)=> ++i);
const idCommentsArray = Array.from({length:150}, (_, i)=> ++i);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => {
  const idComment = idCommentsArray.shift();
  return {
    id: idComment,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

const generationComments = () => Array.from({length: SIMILAR_COMMENTS_COUNT}, createComment);

const createPhotoDescription = () => {
  const id = idArray.shift();
  return {
    id: id,
    url: `img/photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(0, 250),
    comments: generationComments(),
  };
};

const createPhotoDescriptions = () => Array.from({length: SIMILAR_PHOTO_DESCRIPTION_COUNT}, createPhotoDescription);

createPhotoDescriptions();
