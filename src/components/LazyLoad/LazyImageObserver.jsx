import React, { useRef, Suspense, useEffect } from "react";
import LazyLoadImage from "./LazyLoadImage";

const LazyImageObserver = ({ source, alt }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (imgRef.current) {
            imgRef.current.renderComponent = (
              <Suspense fallback={<div className="image-load-placeholder" />}>
                <LazyLoadImage source={source} alt={alt} />
              </Suspense>
            );
          }
        }
      });
    });

    const imgElement = imgRef.current;
    imageObserver.observe(imgElement);

    return () => {
      imageObserver.unobserve(imgElement);
    };
  }, [source, alt]);

  return (
    <div ref={imgRef} className="image-load-placeholder">
      {imgRef.current?.renderComponent}
    </div>
  );
};

export default LazyImageObserver;
