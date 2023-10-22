import { Card } from "./components/card/card";
import DemoImages from "./demoimages.json";

export default function Home() {
  const RenderedCards = () => {
    return DemoImages.map((image) => {
      return (
        <Card
          key={image.id}
          content={{ description: image.description, image: image.imageUrl }}
        />
      );
    });
  };

  return (
    <div className="h-full min-h-screen bg-slate-100 w-screen">
      <div className="relative flex p-4">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          <RenderedCards />
        </div>
      </div>
    </div>
  );
}
