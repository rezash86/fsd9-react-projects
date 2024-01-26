const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

//https://media.rawg.io/media/crop/600/400/games/490/49016e06ae2103881ff6373248843069.jpg

export default getCroppedImageUrl;
