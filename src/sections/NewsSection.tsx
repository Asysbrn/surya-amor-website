import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FeaturedNewsCard } from '../components/news/FeaturedNewsCard'
import { featuredNews } from '../data/news'

export function NewsSection() {
  return (
    <section className="section home-news" aria-labelledby="home-news-title">
      <div className="container">
        <header className="home-news__heading">
          <div><p className="eyebrow">SAT newsroom</p><h2 className="heading" id="home-news-title">Ideas, events and progress from the field.</h2></div>
          <div><p>Follow SAT’s work across digitization, preservation and technology through selected company stories.</p><Link to="/news">Explore all news <ArrowRight size={17} aria-hidden="true" /></Link></div>
        </header>
        <FeaturedNewsCard article={featuredNews} compact />
      </div>
    </section>
  )
}
