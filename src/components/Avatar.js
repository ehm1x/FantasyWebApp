export function Avatar({ avatarId }) {
  const avatarUrl = `https://sleepercdn.com/avatars/thumbs/${avatarId}`;
  return (
    <div className="flex justify-center items-center rounded-full w-10 h-10 overflow-hidden">
      <img
        src={avatarUrl}
        alt={"Avatar :("}
        className="transform scale-110 object-cover w-full h-full"
      />
    </div>
  );
}
