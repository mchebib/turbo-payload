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
import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  ChartNoAxesColumnIncreasing,
  CircleGauge,
  FilePenLine,
  LayoutGrid,
  Settings2,
  Sparkles,
} from "lucide-react";

import { ApiStatus } from "./api-status";
import styles from "./page.module.css";

const navigation = [
  { label: "Overview", icon: LayoutGrid, active: true },
  { label: "Content", icon: FilePenLine },
  { label: "Projects", icon: Boxes },
  { label: "Analytics", icon: ChartNoAxesColumnIncreasing },
];

const metrics = [
  { label: "Published entries", value: "24", detail: "+6 this month" },
  { label: "Active projects", value: "03", detail: "All systems healthy" },
  { label: "Content coverage", value: "86%", detail: "+12% since launch" },
];

const activity = [
  { title: "Landing page updated", meta: "Payload CMS · 18 minutes ago" },
  { title: "API health check passed", meta: "Production · 42 minutes ago" },
  { title: "Documentation published", meta: "Mintlify · 2 hours ago" },
];

export default function Home() {
  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <a
          className={styles.brand}
          href="#top"
          aria-label="Northstar workspace"
        >
          <span aria-hidden="true">N</span>
          <strong>Northstar</strong>
        </a>

        <nav aria-label="Primary navigation">
          <p>Workspace</p>
          {navigation.map(({ label, icon: Icon, active }) => (
            <a data-active={active || undefined} href="#top" key={label}>
              <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.sidebarFooter}>
          <a href="http://localhost:3001">
            <BookOpen aria-hidden="true" size={17} />
            Documentation
          </a>
          <a href="#settings">
            <Settings2 aria-hidden="true" size={17} />
            Settings
          </a>
          <div className={styles.profile}>
            <span>MC</span>
            <div>
              <strong>Workspace admin</strong>
              <small>admin@example.com</small>
            </div>
          </div>
        </div>
      </aside>

      <section className={styles.workspace} id="top">
        <header className={styles.topbar}>
          <div>
            <span className={styles.breadcrumb}>Workspace / Overview</span>
          </div>
          <div className={styles.topbarActions}>
            <ApiStatus />
            <a href="http://localhost:3002/admin">
              Open Payload
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.intro}>
            <div>
              <Announcement themed>
                <AnnouncementTag>Monday briefing</AnnouncementTag>
                <AnnouncementTitle>
                  Everything is moving
                  <Sparkles aria-hidden="true" size={14} />
                </AnnouncementTitle>
              </Announcement>
              <h1>Good morning.</h1>
              <p>
                Your content platform is healthy and ready for the next release.
              </p>
            </div>
            <time dateTime="2026-06-22">June 22, 2026</time>
          </div>

          <section className={styles.metrics} aria-label="Workspace metrics">
            {metrics.map((metric, index) => (
              <div className={styles.metric} key={metric.label}>
                <span>0{index + 1}</span>
                <p>{metric.label}</p>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </div>
            ))}
          </section>

          <div className={styles.grid}>
            <Card className={styles.focusCard}>
              <CardHeader>
                <span className={styles.cardEyebrow}>Current focus</span>
                <CardTitle className={styles.focusTitle}>
                  Shape the next release without losing the thread.
                </CardTitle>
              </CardHeader>
              <CardContent className={styles.focusContent}>
                <p>
                  Keep product content, delivery health, and team context in one
                  deliberately quiet workspace.
                </p>
                <a href="http://localhost:3002/admin">
                  Edit content
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </CardContent>
            </Card>

            <Card className={styles.activityCard}>
              <CardHeader className={styles.activityHeader}>
                <CardTitle>Recent activity</CardTitle>
                <CircleGauge aria-hidden="true" size={20} />
              </CardHeader>
              <CardContent className={styles.activityList}>
                {activity.map((item) => (
                  <div key={item.title}>
                    <span aria-hidden="true" />
                    <p>
                      <strong>{item.title}</strong>
                      <small>{item.meta}</small>
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
