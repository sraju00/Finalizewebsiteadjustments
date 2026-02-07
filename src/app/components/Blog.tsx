import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function Blog() {
  const [showAll, setShowAll] = useState(false);

  const articles = [
    {
      title: "Why Is My Listing Not Getting Offers?",
      excerpt: "If your home is sitting on the market without offers, it's not random—there's a reason. Here's what the data shows about why listings stall and what you can do about it.",
      category: "Seller Education",
      date: "January 24, 2026",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2Nzc1NzIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min read",
      link: "https://medium.com/@saravanan.raju06/why-is-my-listing-not-getting-offers-bea6333b5d04"
    },
    {
      title: "Why Didn't My Home Sell?",
      excerpt: "Understanding the real reasons behind a failed listing—and what you can do differently next time to get better results.",
      category: "Seller Education",
      date: "January 20, 2026",
      image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGZyb250JTIwdmlld3xlbnwxfHx8fDE3Njc3NTcyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min read",
      link: "https://medium.com/@saravanan.raju06/why-didnt-my-home-sell-23c185ccef80"
    },
    {
      title: "What Is My Home Worth in 2026?",
      excerpt: "Learn how to accurately determine your home's value in today's market using data-driven insights and avoid common pricing mistakes.",
      category: "Home Valuation",
      date: "January 15, 2026",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGx1eHVyeXxlbnwxfHx8fDE3Njc3NTcyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "7 min read",
      link: "https://medium.com/@saravanan.raju06/what-is-my-home-worth-in-2026-876c83e49bab"
    },
    {
      title: "Why Homes Don't Sell in Tracy (2026 Edition)",
      excerpt: "A deep dive into the Tracy market—analyzing local buyer behavior, pricing patterns, and what separates homes that sell from those that sit.",
      category: "Market Insights",
      date: "January 10, 2026",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHN1YnVyYmFufGVufDF8fHx8MTc2Nzc1NzIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "8 min read",
      link: "https://medium.com/@saravanan.raju06/why-homes-dont-sell-in-tracy-2026-edition-24fce37dd7fb"
    },
    {
      title: "Top Realtor Near Me: What Actually Matters in 2026",
      excerpt: "Not all agents are created equal. Here's what to look for when choosing a Realtor—beyond reviews and marketing promises.",
      category: "Choosing an Agent",
      date: "January 5, 2026",
      image: "https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBzdHJhdGVneSUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY3NzU3MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min read",
      link: "https://medium.com/@saravanan.raju06/top-realtor-near-me-what-actually-matters-in-2026-e7d957511e50"
    },
    {
      title: "Why Bay Area Homes Are Sitting Longer in 2026",
      excerpt: "Buyer behavior has shifted dramatically. Here's what the data shows about days-on-market trends and how to adapt your strategy.",
      category: "Market Insights",
      date: "January 2, 2026",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHBvb2wlMjBzdW5zZXR8ZW58MXx8fHwxNzY3NzM2NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min read"
    },
    {
      title: "The Real Cost of Overpricing Your Home",
      excerpt: "Data from 500+ Central Valley listings shows overpricing by just 5% costs sellers an average of $18,000. Here's why.",
      category: "Seller Education",
      date: "December 28, 2025",
      image: "https://images.unsplash.com/photo-1640109414028-4c7f29f39ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzY3NzM2NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min read"
    }
  ];

  const displayedArticles = showAll ? articles : articles.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Market Intelligence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Market Data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real market analysis, seller tips, and the truth about what's happening in Central Valley 
            and Bay Area real estate right now.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {displayedArticles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  {article.link ? (
                    <a 
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 font-medium"
          >
            {showAll ? 'Show Less' : 'View All Articles'}
            <ArrowRight className={`w-5 h-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}