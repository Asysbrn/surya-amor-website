import { FeaturedNewsCard } from '../components/news/FeaturedNewsCard'
import { PageHero } from '../components/common/PageHero'
import { featuredNews, newsArticles } from '../data/news'
import { useSeo } from '../hooks/useSeo'

export default function NewsPage() {
  useSeo({ title: 'Newsroom', description: 'News, events and perspectives from Surya Amor Technology across digitization, preservation and technology.', path: '/news' })
  const moreArticles = newsArticles.filter((article) => article.slug !== featuredNews.slug)

  return (
    <>
      <PageHero eyebrow="SAT newsroom" title="News and perspectives from the field." description="Company updates, event stories and practical perspectives connected to digitization, preservation and technology." />
      <section className="section newsroom" aria-labelledby="featured-news-title">
        <div className="container">
          <header className="newsroom__heading"><div><p className="eyebrow">Latest story</p><h2 className="heading" id="featured-news-title">Featured news</h2></div><p>{newsArticles.length} {newsArticles.length === 1 ? 'story' : 'stories'} published</p></header>
          <FeaturedNewsCard article={featuredNews} />
          {moreArticles.length > 0 && <div className="newsroom__grid">{moreArticles.map((article) => <FeaturedNewsCard article={article} compact key={article.slug} />)}</div>}
        </div>
      </section>
    </>
  )
}
