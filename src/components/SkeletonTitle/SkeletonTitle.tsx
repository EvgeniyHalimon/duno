import './SkeletonTitle.scss';

const SkeletonTitle = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-poster"></div>
      <div className="skeleton-info">
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
        <div className="skeleton-genres">
          <div className="skeleton-genre"></div>
          <div className="skeleton-genre"></div>
          <div className="skeleton-genre"></div>
        </div>
        <div className="skeleton-line"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
};

export default SkeletonTitle;
