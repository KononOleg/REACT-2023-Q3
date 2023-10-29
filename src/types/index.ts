export type Movie = {
  id: string;
  title: string;
  image: string;
};

export type Result = {
  jawSummary: JawSummary;
};

type JawSummary = {
  id: string;
  title: string;
  backgroundImage: BackgroundImage;
};

type BackgroundImage = {
  url: string;
};
