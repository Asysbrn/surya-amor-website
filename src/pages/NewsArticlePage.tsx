import { ArrowLeft, CalendarDays, MapPin } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { NewsVideoGallery } from '../components/news/NewsVideoGallery'
import { getNewsArticle } from '../data/news'
import { useSeo } from '../hooks/useSeo'

function NewsArticle({ slug }: { slug: string }) {
  const article = getNewsArticle(slug)

  useSeo({
    title: article?.title ?? 'News Article',
    description: article?.shortDescription ?? 'News from Surya Amor Technology.',
    path: article ? `/news/${article.slug}` : '/404',
    image: article?.featuredImage.src,
  })

  if (!article) return <Navigate to="/404" replace />

  return (
    <article className="news-article">
      <header className="news-article-hero">
        <div className="container news-article-hero__copy">
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/news">News</Link><span aria-hidden="true">/</span><span aria-current="page">{article.title}</span></nav>
          <div className="news-article-hero__meta"><span className="news-tag">{article.category}</span><span><CalendarDays size={16} aria-hidden="true" /><time dateTime={article.date}>{article.dateLabel}</time></span>{article.location && <span><MapPin size={16} aria-hidden="true" />{article.location}</span>}</div>
          <h1>{article.title}</h1>
          <p>{article.shortDescription}</p>
        </div>
      </header>

      <div className="container news-article__feature">
        <figure><img src={article.featuredImage.src} alt={article.featuredImage.alt} />{article.featuredImage.caption && <figcaption>{article.featuredImage.caption}</figcaption>}</figure>
      </div>

      <section className="section section--compact news-article__story" aria-label="Article content">
        <div className="container news-article__layout">
          <div className="news-article__prose">
            <p className="news-article__standfirst">Preservation is strengthened when knowledge, practical experience and technology come together.</p>
            {article.fullContent.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="news-article__details">
            <p className="news-article__details-label">Story details</p>
            <dl>
              <div><dt>Category</dt><dd>{article.category}</dd></div>
              <div><dt>Event dates</dt><dd><time dateTime={article.date}>{article.dateLabel}</time></dd></div>
              {article.location && <div><dt>Location</dt><dd>{article.location}</dd></div>}
              {article.author && <div><dt>Published by</dt><dd>{article.author}</dd></div>}
            </dl>
          </aside>
        </div>
      </section>

      {article.images.length > 0 && (
        <section className="section section--tint news-gallery" aria-labelledby="news-gallery-heading">
          <div className="container">
            <header className="news-media-heading"><div><p className="eyebrow">From the event</p><h2 id="news-gallery-heading">Conference moments</h2></div><p>Conversations, demonstrations and connections from the SEAPAVAA Conference floor.</p></header>
            <div className="news-gallery__grid">{article.images.map((media, index) => <figure className={index === 0 ? 'news-gallery__wide' : ''} key={media.src}><img src={media.src} alt={media.alt} loading="lazy" /><figcaption>{media.caption}</figcaption></figure>)}</div>
          </div>
        </section>
      )}

      {article.videos.length > 0 && <div className="section section--dark news-video-section"><div className="container"><NewsVideoGallery videos={article.videos} /></div></div>}

      <footer className="section section--compact news-article__footer"><div className="container"><Link to="/news"><ArrowLeft size={18} aria-hidden="true" /> Back to News</Link></div></footer>
    </article>
  )
}

export default function NewsArticlePage() {
  const { slug = '' } = useParams()
  return <NewsArticle slug={slug} />
}
