import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Gear",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "Our rain gear is made from durable, waterproof materials that keep you protected from the elements, while still being comfortable to wear. Whether you're hiking, camping, or simply commuting to work, we have a wide range of rain gear to suit your needs, including jackets, pants, and ponchos.",
  },
  {
    text: "About Us",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "Welcome to Seattle Outdoor Gear, your one-stop-shop for high-quality rain gear to keep you dry and comfortable in the notoriously rainy Seattle weather. We understand that the rain can be a real challenge for outdoor enthusiasts, which is why we're passionate about providing top-notch rain gear that helps you make the most of your adventures, no matter the weather.",
  },
  {
    text: "Our Differences",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Our products are specifically designed for the Seattle climate, so you can trust that they'll perform well in the heavy rain and strong winds that are so common here. We also take pride in offering a range of sizes and styles, so you can find the perfect rain gear for your unique needs and preferences.",
  },
  {
    text: "What's Next?",
    url: "https://www.gatsbyjs.com/cloud",
    description:
      "At Seattle Outdoor Gear, we believe that everyone deserves to enjoy the outdoors, no matter what the weather is like. So, if you're looking for rain gear that will keep you dry, warm, and comfortable, look no further than our online store. Browse our collection today, and experience the difference that quality rain gear can make to your outdoor adventures.",
  },
]

const samplePageLinks = [
]

const moreLinks = [
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/sog1.jpg"
        loading="eager"
        width={464}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Seattle Outdoor Gear</b>
      </h1>
      <p className={styles.intro}>
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
