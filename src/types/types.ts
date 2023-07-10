export type RootStackParamList = {
  List: undefined;
  Detail: {
    post: Post;
  };
};

export type Post = {
  id: number;
  title: string;
  source: string;
  price: number;
  description: string;
};
