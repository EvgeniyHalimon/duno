import './SkeletonCardInfo.scss';

export const SkeletonCardInfo = () => {
  return (
    <div className="slide-skeleton" data-testid="skeleton-card">
      <div className="slide-skeleton-item">
        <div className="slide-skeleton-poster"></div>
        <div className="slide-skeleton-info" data-testid="skeleton-info">
        </div>
      </div>
    </div>
  );
};
