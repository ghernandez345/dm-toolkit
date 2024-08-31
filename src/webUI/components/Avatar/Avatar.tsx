interface IAvatarProps {
  src?: string;
}

const Avatar = ({ src }: IAvatarProps) => {
  return (
    <img className="rounded-lg border border-black" src={src} alt="avatar" />
  );
};

export default Avatar;
