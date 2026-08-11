import { ArrowUpRight, CalendarDays, MapPin, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { NewsArticle } from '../../data/news'

interface FeaturedNewsCardProps {
  article: NewsArticle
  compact?: boolean
}

export function FeaturedNewsCard({ article, compact = false }: FeaturedNewsCardProps) {
  return (
    <article className={`news-feature ${compact ? 'news-feature--compact' : ''}`}>
      <Link className="news-feature__media" to={`/news/${article.slug}`} aria-label={`Read ${article.title}`}>
        <img src={article.featuredImage.src} alt={article.featuredImage.alt} loading="lazy" />
        <span className="news-feature__media-shade" aria-hidden="true" />
        {article.videos.length > 0 && <span className="news-feature__video"><Play size={15} fill="currentColor" aria-hidden="true" /> Includes video</span>}
      </Link>
      <div className="news-feature__body">
        <div className="news-feature__meta">
          <span className="news-tag">{article.category}</span>
          <span><CalendarDays size={15} aria-hidden="true" /><time dateTime={article.date}>{article.dateLabel}</time></span>
        </div>
        <h3><Link to={`/news/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.shortDescription}</p>
        <div className="news-feature__footer">
          {article.location && <span><MapPin size={15} aria-hidden="true" />{article.location}</span>}
          <Link className="news-read-more" to={`/news/${article.slug}`}>Read More <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </article>
  )
}
