import seepavaaGroupImage from '../assets/images/news/WhatsApp Image 2026-08-11 at 12.29.05 PM.jpeg'
import seepavaaBoothImage from '../assets/images/news/WhatsApp Image 2026-08-11 at 12.29.05 PM (1).jpeg'
import seepavaaConversationImage from '../assets/images/news/WhatsApp Image 2026-08-11 at 12.29.05 PM (2).jpeg'
import seepavaaDemonstrationImage from '../assets/images/news/WhatsApp Image 2026-08-11 at 12.29.05 PM (3).jpeg'
import seepavaaVideoOne from '../assets/images/news/WhatsApp Video 2026-08-11 at 12.29.05 PM.mp4'
import seepavaaVideoTwo from '../assets/images/news/WhatsApp Video 2026-08-11 at 12.29.05 PM (1).mp4'
import seepavaaVideoThree from '../assets/images/news/WhatsApp Video 2026-08-11 at 12.29.05 PM (2).mp4'
import seepavaaVideoFour from '../assets/images/news/WhatsApp Video 2026-08-11 at 12.29.05 PM (3).mp4'

export interface NewsImage {
  src: string
  alt: string
  caption?: string
}

export interface NewsVideo {
  src: string
  poster: string
  title: string
  caption: string
}

export interface NewsArticle {
  slug: string
  title: string
  date: string
  dateLabel: string
  category: string
  shortDescription: string
  fullContent: string[]
  featuredImage: NewsImage
  images: NewsImage[]
  videos: NewsVideo[]
  location?: string
  author?: string
  externalLink?: string
  featured?: boolean
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'seepavaa-conference',
    title: 'Connecting Preservation and Technology at SEAPAVAA 2026',
    date: '2026-06-06',
    dateLabel: '6–11 June 2026',
    category: 'Events',
    shortDescription: 'SAT joined the SEAPAVAA Conference 2026 in Ipoh for conversations around audiovisual preservation, digitization and technology-enabled access.',
    fullContent: [
      'Surya Amor Technology Sdn Bhd was pleased to participate in the SEAPAVAA Conference 2026 in Ipoh, Perak—joining professionals and organisations with a shared interest in audiovisual archives, preservation and digitization.',
      'The conference created a valuable space for our team to meet attendees, share SAT’s digital archiving and audiovisual conversion work, and explore how technology can support the long-term care and continued accessibility of important collections.',
      'Conversations throughout the event reinforced the value of practical preservation workflows, knowledge sharing and collaboration across the wider heritage community. We are grateful for the opportunity to take part and look forward to continuing our contribution through thoughtful, technology-led digitization and preservation solutions.',
    ],
    featuredImage: {
      src: seepavaaGroupImage,
      alt: 'SAT representatives and fellow attendees standing in front of the SEAPAVAA Conference 2026 backdrop',
      caption: 'SAT at the SEAPAVAA Conference 2026 in Ipoh, Perak.',
    },
    images: [
      {
        src: seepavaaBoothImage,
        alt: 'Conference attendees speaking with an SAT representative at the Surya Amor Technology exhibition booth',
        caption: 'Sharing SAT’s digital archiving and audiovisual conversion capabilities with conference attendees.',
      },
      {
        src: seepavaaConversationImage,
        alt: 'SAT team members in conversation with another conference attendee',
        caption: 'Connecting with professionals working across audiovisual archives and preservation.',
      },
      {
        src: seepavaaDemonstrationImage,
        alt: 'An SAT representative discussing technology with visitors during the conference',
        caption: 'Knowledge exchange and technology conversations on the conference floor.',
      },
    ],
    videos: [
      { src: seepavaaVideoOne, poster: seepavaaBoothImage, title: 'Conference highlight 01', caption: 'A moment from SAT’s participation at SEAPAVAA 2026.' },
      { src: seepavaaVideoTwo, poster: seepavaaConversationImage, title: 'Conference highlight 02', caption: 'Conversations and connections from the conference floor.' },
      { src: seepavaaVideoThree, poster: seepavaaDemonstrationImage, title: 'Conference highlight 03', caption: 'Technology and preservation discussions during the event.' },
      { src: seepavaaVideoFour, poster: seepavaaGroupImage, title: 'Conference highlight 04', caption: 'A further view of the SEAPAVAA 2026 experience.' },
    ],
    location: 'Ipoh, Perak, Malaysia',
    author: 'Surya Amor Technology Sdn Bhd',
    featured: true,
  },
]

export const featuredNews = newsArticles.find((article) => article.featured) ?? newsArticles[0]

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug)
}
