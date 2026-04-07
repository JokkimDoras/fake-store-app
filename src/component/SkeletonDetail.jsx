import "../skeleton.css";

export default function SkeletonDetail() {
  return (
    <div className="detail-container">
      <div className="detail-card">

        <div className="detail-image">
          <div className="skeleton skeleton-detail-img"></div>
        </div>

        <div className="detail-info">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text short"></div>

          <div className="skeleton skeleton-price"></div>

          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text short"></div>

          <div className="skeleton skeleton-btn"></div>
        </div>

      </div>
      
    </div>
  );
}