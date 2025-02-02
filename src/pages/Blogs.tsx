import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Email Marketing: AI-Driven Personalization",
    excerpt: "Discover how AI is revolutionizing email marketing through advanced personalization...",
    image: "/blog-1.png",
    date: "Feb 1, 2024",
  },
  {
    id: 2,
    title: "5 Ways to Improve Your Email Open Rates",
    excerpt: "Learn the proven strategies to boost your email open rates and engage your audience...",
    image: "/blog-2.png",
    date: "Jan 28, 2024",
  },
  {
    id: 3,
    title: "WhatsApp Marketing: The Ultimate Guide",
    excerpt: "Everything you need to know about leveraging WhatsApp for business growth...",
    image: "/blog-3.png",
    date: "Jan 25, 2024",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Latest Blog Posts
            </h1>
            <p className="text-xl text-gray-600">
              Insights and tips about AI-powered marketing automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary font-medium hover:text-secondary transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;