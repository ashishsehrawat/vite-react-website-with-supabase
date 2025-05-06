import React, { useEffect, useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Review {
  id: string;
  name: string;
  review: string;
  rating: number;
  created_at: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setReviews(data || []);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className="text-center mb-12 opacity-0 transition-all duration-1000 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-2 relative inline-block">
            Client Reviews
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
          </h2>
          <p className="text-gray-400 italic">What our clients say about us</p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 transform transition-all duration-300 hover:scale-102"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">{review.name}</h4>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-amber-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{review.review}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;