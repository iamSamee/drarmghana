import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Fatima K.",
    rating: 5,
    text: "Dr. Armghana is an excellent doctor. Very caring and professional. She made my journey so comfortable and stress-free.",
    date: "2 months ago",
  },
  {
    name: "Ayesha M.",
    rating: 5,
    text: "Best gynecologist in G-13 area. She listens carefully to all concerns and provides detailed explanations. Highly recommended!",
    date: "3 months ago",
  },
  {
    name: "Sara A.",
    rating: 5,
    text: "Very satisfied with the treatment. The clinic is clean and staff is very cooperative. Dr. Armghana is very experienced and kind.",
    date: "1 month ago",
  },
  {
    name: "Hina R.",
    rating: 5,
    text: "Had a wonderful experience. Dr. Armghana is very knowledgeable and takes time to explain everything properly. Thank you!",
    date: "4 months ago",
  },
];

const reviewSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Armghana Ali",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": reviews.length.toString(),
  },
  "review": reviews.map((r) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
    "reviewBody": r.text,
  })),
});

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: reviewSchema }} />
      <div className="container mx-auto px-2 sm:px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-primary-light mb-3">
            <span className="text-xs sm:text-sm font-medium text-primary">Patient Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Real experiences from our valued patients
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-3xl sm:max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-primary/10 shadow-soft hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              {/* Accent border left */}
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/60 to-primary/10 rounded-l-xl" />

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-2" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary drop-shadow-sm" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                    <span className="text-primary-foreground font-bold text-base sm:text-lg">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    {review.name}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-8 sm:mt-12 flex flex-col items-center gap-4">
          <a
            href="https://g.page/r/CTw2ZSbDJVEwEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm sm:text-base"
          >
            View all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href="https://g.page/r/CTw2ZSbDJVEwEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-shimmer text-white font-semibold shadow-button hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all text-base"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 48 48" fill="none"><g><circle cx="24" cy="24" r="24" fill="#fff"/><path d="M34.6 24.2c0-.7-.1-1.4-.2-2.1H24v4.1h6c-.3 1.5-1.3 2.7-2.7 3.5v2.9h4.4c2.6-2.4 4.1-5.9 4.1-9.4z" fill="#4285F4"/><path d="M24 36c3.2 0 5.8-1.1 7.7-2.9l-4.4-2.9c-1.2.8-2.7 1.3-4.3 1.3-3.3 0-6-2.2-7-5.2h-4.5v3.1C14.9 33.8 19.1 36 24 36z" fill="#34A853"/><path d="M17 26.3c-.3-.8-.5-1.6-.5-2.3s.2-1.6.5-2.3v-3.1h-4.5C11.6 20.2 11 22 11 24s.6 3.8 1.5 5.4l4.5-3.1z" fill="#FBBC05"/><path d="M24 17.9c1.7 0 3.2.6 4.3 1.7l3.2-3.2C29.8 14.7 27.2 13.5 24 13.5c-4.9 0-9.1 2.2-11.5 5.4l4.5 3.1c1-3 3.7-5.2 7-5.2z" fill="#EA4335"/></g></svg>
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
};
