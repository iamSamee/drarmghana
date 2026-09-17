import { Stars } from "./shared";

const reviews = [
  { name: "Manam Fatima", rating: 5, text: "I used to have a lot of period pain and I used to think it's normal. One day, I saw her video on Instagram where she explained that it can indicate some underlying issue too. I booked an appointment with her and she actually diagnosed the underlying issue and now I can't thank her enough how relieved I am." },
  { name: "Alvina Fatima", rating: 5, text: "Dr. Armaghana Ali is an excellent listener. I cannot thanks to Dr. Armaghana enough for her support during my pregnancy. Her expertise and calm nature. She is incredibly knowledgeable and attentive. She took the time to answer all my questions and explained my treatment options very clearly. Truly one of the best gynecologist." },
  { name: "Shaukat Nawaz", rating: 5, text: "She is an extremely talented and polite Gynaecologist. Listen's to the problems thoroughly and calms the patient till the point she is satisfied. My wife was extremely upset and we were having very bad days, and she helped us out of it through the entire phase. She was always available whenever we needed her. I can't thank her enough for her services. Highly recommend!" },
  { name: "Afshan", rating: 5, text: "Dr. Armghana is a very kind and lovely doctor. She always talks to her patients with great understanding and a smiling face, which I personally like a lot. Especially during my difficult time, she encouraged me, gave me strength, and explained everything very thoroughly to help solve my problem. She also responds quickly on mobile. Thank you so much Dr. Armghana Ali. Highly recommended from my side." },
  { name: "Ayesha Maryam", rating: 5, text: "The best doc the best listener. I told my whole story. She listened very carefully and answered my all questions and doubt. The best one." },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-4 py-2 rounded-full bg-primary-light mb-4">
            <span className="text-sm font-semibold text-primary">Patient Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            What Patients <span className="text-gradient">Say</span> About Dr. Armghana
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="font-display font-bold text-4xl text-foreground">4.8</span>
            <div className="text-left">
              <Stars size="w-5 h-5" />
              <p className="text-sm text-muted-foreground mt-0.5">Based on 117 Google Reviews</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="p-5 rounded-2xl bg-card border border-primary/10 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/60 to-primary/10 rounded-l-2xl" />
              <Stars />
              <p className="mt-3 mb-5 text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{r.name.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-sm text-foreground">{r.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="https://g.page/r/CTw2ZSbDJVEwEBM/review" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-sm">
            View all reviews on Google ↗
          </a>
        </div>
      </div>
    </section>
  );
}
