import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Email: AI-Powered Automation",
      excerpt: "How artificial intelligence is transforming email workflows and saving businesses hours every week.",
      date: "January 15, 2024",
      author: "Sarah Chen",
      category: "AI & Automation",
      readTime: "5 min read"
    },
    {
      title: "Per-Seat Pricing is Dead: Why Storage-Based Models Win",
      excerpt: "The shift from per-user pricing to storage-based models is revolutionizing SaaS economics for growing teams.",
      date: "January 8, 2024",
      author: "Michael Rodriguez",
      category: "Business Strategy",
      readTime: "7 min read"
    },
    {
      title: "Email Deliverability Best Practices for 2024",
      excerpt: "Essential tips to ensure your emails reach the inbox and avoid spam filters in today's competitive landscape.",
      date: "December 28, 2023",
      author: "Emily Watson",
      category: "Technical",
      readTime: "6 min read"
    },
    {
      title: "Building a Remote-First Email Company",
      excerpt: "Our journey building VenMail as a distributed team and the lessons learned about collaboration and productivity.",
      date: "December 15, 2023",
      author: "David Kim",
      category: "Company Culture",
      readTime: "8 min read"
    },
    {
      title: "The Hidden Costs of Email Tool Bloat",
      excerpt: "How multiple email subscriptions are draining your budget and what you can do about it.",
      date: "December 1, 2023",
      author: "Lisa Thompson",
      category: "Productivity",
      readTime: "4 min read"
    }
  ];

  const categories = ["All", "AI & Automation", "Business Strategy", "Technical", "Company Culture", "Productivity"];

  return (
    <DefaultLayout>
      <Head>
        <title>VenMail Blog — Email, Automation, and Business Insights</title>
        <meta name="description" content="Discover the latest insights on email automation, AI-powered workflows, and business productivity from the VenMail team." />
        <meta property="og:title" content="VenMail Blog" />
        <meta property="og:description" content="Expert insights on email, automation, and growing your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/blog" />
      </Head>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              VenMail Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and stories about email automation, AI, and building better businesses.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    <a href="#" className="hover:text-primary-600 transition-colors">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span>{post.author}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay in the Loop
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest insights on email automation, AI, and business productivity delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
