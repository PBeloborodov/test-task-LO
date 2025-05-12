type PhotoSize = {
  src: string;
  width: number;
  height: number;
};

type Photo = {
  xs: string | PhotoSize;
  sm: string | PhotoSize;
  md: string | PhotoSize;
  lg: string | PhotoSize;
  original: string;
};

type AlbumProfile = {
  id: number;
  photoId: number;
};

type LikesInfo = {
  count: number;
  canView: boolean | null;
  isLiked?: boolean | null;
};

type CommentsInfo = {
  count: number;
  canView: boolean | null;
  canComment?: boolean;
  isCommented?: boolean;
};

type RepostsInfo = {
  count: number;
  canView: boolean | null;
  canRepost: boolean;
  isReposted: boolean;
};

type User = {
  id: number;
  screenName: string | null;
  firstName: string;
  lastName: string;
  verified: number;
  deactivated: number;
  sex: number;
  photo: Photo;
  albumProfile: AlbumProfile;
  isOnline: number;
  lastVisit: number;
  rate: {
    total: number;
    info: number;
  };
  countryId: number;
  cityId: number;
  birthday: {
    date: number;
    year: number;
    month: number;
    day: number;
  };
  status: string | null;
  url: string;
};

type Union = {
  id: number;
  screenName: string | null;
  type: number;
  ageLimit: number;
  membersHide: boolean;
  services: any[];
  name: string;
  status: string | null;
  description: string;
  website: string;
  photo: Photo;
  albumProfile: AlbumProfile;
  cover: null | {
    xs: PhotoSize;
    sm: PhotoSize;
    md: PhotoSize;
    lg: PhotoSize;
    original: string;
  };
  countryId: number;
  cityId: number;
  categoryId: number;
  subcategoryId: number | null;
  verified: number;
  url: string;
  kind: number;
};

type PostPhoto = {
  id: number;
  albumId: number;
  userId: number;
  unionId: number;
  photo: {
    xs: PhotoSize;
    sm: PhotoSize;
    md: PhotoSize;
    lg: PhotoSize;
    original: string;
  };
  description: string | null;
  time: number;
  likes: LikesInfo;
  comments: {
    count: number;
    canView: boolean | null;
  };
  canEdit: boolean | null;
  canDelete: boolean | null;
};

export type PostItem = {
  id: number;
  postId: number | null;
  flowId: number | null;
  message: string | null;
  time: number;
  closeComments: boolean;
  contactsOnly: boolean;
  isPinned: boolean;
  likes: LikesInfo;
  comments: CommentsInfo;
  reposts: RepostsInfo;
  views: {
    count: number;
  };
  canEdit: boolean;
  canManage: boolean;
  canDelete: boolean;
  url: string;
  user: User;
  union: Union;
  photos: PostPhoto[];
  audios: any[];
  videos: any[];
  flow: null;
  post: null;
};
