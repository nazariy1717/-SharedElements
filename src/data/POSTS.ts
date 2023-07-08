export interface Post {
  id: number;
  title: string;
  source: string;
  price: number;
  description: string;
}

const POSTS: Post[] = [
  {
    id: 1,
    source:
      'https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_1280.jpg',
    price: 19.99,
    title: 'Post 1',
    description: 'This is the description for Post 1.',
  },
  {
    id: 2,
    source:
      'https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_1280.jpg',
    price: 29.99,
    title: 'Post 2',
    description: 'This is the description for Post 2.',
  },
  {
    id: 3,
    source:
      'https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_1280.jpg',
    price: 14.99,
    title: 'Post 3',
    description: 'This is the description for Post 3.',
  },
  {
    id: 4,
    source:
      'https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_1280.jpg',
    price: 9.99,
    title: 'Post 4',
    description: 'This is the description for Post 4.',
  },
  {
    id: 5,
    source:
      'https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_1280.jpg',
    price: 24.99,
    title: 'Post 5',
    description: 'This is the description for Post 5.',
  },
  {
    id: 6,
    source:
      'https://cdn.pixabay.com/photo/2018/08/26/23/55/woman-3633737_1280.jpg',
    price: 12.99,
    title: 'Post 6',
    description: 'This is the description for Post 6.',
  },
];

export default POSTS;
