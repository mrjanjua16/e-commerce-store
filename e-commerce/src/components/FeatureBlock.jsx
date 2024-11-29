const FeatureBlock = ({ title, description }) => {
  return (
    <div className="text-center px-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureBlock;
