// SkeletonHome.jsx
import "../skeleton.css";

export default function SkeletonHome() {
  return (
    <div className="for-flex">
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div className="header-items" key={i}>
            <div className="skeleton skeleton-img"></div>

            <div className="items-stuff">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text short"></div>
              <div className="skeleton skeleton-price"></div>
              <div className="skeleton skeleton-btn"></div>
            </div>
          </div>
        ))}
    </div>
  );
}