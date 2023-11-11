export function Avatar({ avatarId }) {
  const avatarUrl = `https://sleepercdn.com/avatars/thumbs/${avatarId}`;

  return <img src={avatarUrl} alt="avatar" />;
}
