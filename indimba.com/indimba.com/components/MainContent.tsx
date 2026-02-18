import React from 'react';

const Card: React.FC<{ title: string; category: string; imageUrl: string }> = ({ title, category, imageUrl }) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-brand-red transition-all duration-300 group">
    <div className="overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="p-4">
      <p className="text-sm text-brand-red font-semibold uppercase">{category}</p>
      <h3 className="text-lg font-bold text-white mt-1">{title}</h3>
    </div>
  </div>
);

const MainContent: React.FC = () => {
  const articles = [
    { title: "Global Music Fest Lineup Announced", category: "Music", imageUrl: "https://picsum.photos/seed/music/600/400" },
    { title: "Champions League Final Highlights", category: "Sports", imageUrl: "https://picsum.photos/seed/sports/600/400" },
    { title: "The Rise of Indie Cinema in 2024", category: "Films", imageUrl: "https://picsum.photos/seed/films/600/400" },
    { title: "Summer Fashion Trends to Watch", category: "Fashion", imageUrl: "https://picsum.photos/seed/fashion/600/400" },
    { title: "Tech Innovations Changing Our Lives", category: "Lifestyle", imageUrl: "https://picsum.photos/seed/lifestyle/600/400" },
    { title: "A Deep Dive into Modern Art Movements", category: "Arts & Culture", imageUrl: "https://picsum.photos/seed/art/600/400" },
    { title: "New Podcast Series on Historical Events", category: "Podcast", imageUrl: "https://picsum.photos/seed/podcast/600/400" },
    { title: "Exclusive Interview with a Tech Visionary", category: "Exclusive", imageUrl: "https://picsum.photos/seed/exclusive/600/400" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Featured Stories
        </h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Explore the latest in music, sports, culture, and more from the world of Indimba.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {articles.map((article, index) => (
          <Card key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;