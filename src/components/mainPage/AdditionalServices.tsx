interface AdditionalServicesProps {
  onClickVK: () => void;
  onClickFB: () => void;
}

export const AdditionalServices = ({
  onClickVK,
  onClickFB,
}: AdditionalServicesProps) => {
  return (
    <div className="icons">
      <img src="VK.svg" onClick={onClickVK} alt="VK" />
      <img src="Facebook.svg" onClick={onClickFB} alt="Facebook" />
    </div>
  );
};
