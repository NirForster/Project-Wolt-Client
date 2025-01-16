import noFavoriteImage from "@/assets/noFavoriteImage.png";

const FavoritesSection = () => {
  return (
    <div className="flex justify-between mt-8">
      <div className="max-w-[450px]">
        <h2 className="font-bold text-3xl font-woltHeader text-gray-800">
          Your favorites
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          You’ll find your favorite restaurants and stores here. You can add
          favorites by tapping the heart icon.
        </p>
      </div>
      <div className="max-w-[150px]">
        <img src={noFavoriteImage} alt="noFavoriteImage" />
      </div>
    </div>
  );
};

export default FavoritesSection;
