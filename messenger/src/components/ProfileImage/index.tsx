import { FC, useMemo } from 'react';
import "./style.scss";

interface IPropType {
  imageSrc?: string;
  ownerName: string;
  size?: number;
}

const ProfileImage: FC<IPropType> = ({ imageSrc, ownerName, size }) => {
  const imageSize = useMemo(() => {
    const finallySize = size ?? 40;

    return {
      width: finallySize,
      height: finallySize,
    };
  }, [size]);

  return (
    <div className="profile-icon" style={imageSize}>
      {imageSrc ? (
        <img src={imageSrc} alt={`${ownerName}'s profile image`} />
      ) : (
        <div className="first-latter">{ownerName.charAt(0)}</div>
      )}

      <div className="status active"></div>
    </div>
  );
};

export default ProfileImage;
