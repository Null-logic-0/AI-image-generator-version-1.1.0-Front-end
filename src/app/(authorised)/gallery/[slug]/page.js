import ImageCarousel from "@/components/Gallery/ImageCarousel.js";
import { getUserImages } from "@/lib/data-services.js";

async function ImageCarouselPage({ params }) {
  const { slug } = await params;
  const { images } = await getUserImages();

  const imageId = slug;

  const imageIndex = images.findIndex((img) => img._id === imageId);
  return (
    <div className="mx-auto">
      <ImageCarousel images={images} initialIndex={imageIndex} />
    </div>
  );
}

export default ImageCarouselPage;
