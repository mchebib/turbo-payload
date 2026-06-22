import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@repo/design-system/components/kibo-ui/announcement";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/design-system/components/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { getLandingPage } from "../lib/payload";
import styles from "./page.module.css";

export default async function Home() {
  const content = await getLandingPage();

  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label={content.brandName}>
          <span className={styles.brandMark} aria-hidden="true" />
          {content.brandName}
        </a>
        <span className={styles.headerNote}>{content.eyebrow}</span>
      </header>

      <section className={styles.hero} id="top">
        <Announcement themed className={styles.announcement}>
          <AnnouncementTag>{content.announcement.label}</AnnouncementTag>
          <AnnouncementTitle>
            {content.announcement.text}
            <ArrowUpRight aria-hidden="true" size={14} />
          </AnnouncementTitle>
        </Announcement>

        <h1>{content.headline}</h1>
        <div className={styles.heroFooter}>
          <p>{content.description}</p>
          <div className={styles.actions}>
            <a
              className={styles.primaryAction}
              href={content.actions.primaryHref}
            >
              {content.actions.primaryLabel}
              <ArrowDownRight aria-hidden="true" size={18} />
            </a>
            <a
              className={styles.secondaryAction}
              href={content.actions.secondaryHref}
            >
              {content.actions.secondaryLabel}
              <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.features} id="features">
        <div className={styles.sectionHeading}>
          <span>{content.featuresLabel}</span>
          <h2>{content.featuresHeading}</h2>
        </div>
        <div className={styles.cardGrid}>
          {content.features.map((feature) => (
            <Card className={styles.card} key={feature.id ?? feature.number}>
              <CardHeader>
                <span className={styles.featureNumber}>{feature.number}</span>
                <CardTitle className={styles.cardTitle}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <span>{content.brandName}</span>
        <span>{content.footerText}</span>
      </footer>
    </main>
  );
}
