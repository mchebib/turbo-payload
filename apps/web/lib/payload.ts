export type LandingPageContent = {
  brandName: string;
  eyebrow: string;
  announcement: {
    label: string;
    text: string;
  };
  headline: string;
  description: string;
  actions: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  featuresLabel: string;
  featuresHeading: string;
  features: Array<{
    id?: string | null;
    number: string;
    title: string;
    description: string;
  }>;
  footerText: string;
};

const fallbackContent: LandingPageContent = {
  brandName: "Northstar",
  eyebrow: "A calmer way to publish",
  announcement: {
    label: "Payload powered",
    text: "Content that moves at your pace",
  },
  headline: "Your story, edited once and delivered everywhere.",
  description:
    "Give your team one clear place to shape the message. Payload keeps the content structured; your web app keeps the experience fast.",
  actions: {
    primaryLabel: "Explore the approach",
    primaryHref: "#features",
    secondaryLabel: "Open the CMS",
    secondaryHref: "http://localhost:3002/admin",
  },
  featuresLabel: "01",
  featuresHeading: "Built for the work between idea and launch.",
  features: [
    {
      number: "01",
      title: "Edit with confidence",
      description:
        "A focused content model gives editors the fields they need without exposing implementation details.",
    },
    {
      number: "02",
      title: "Publish independently",
      description:
        "Update the landing page in Payload without touching the web application or waiting on a code release.",
    },
    {
      number: "03",
      title: "Deliver everywhere",
      description:
        "The same structured content is available through Payload APIs for every frontend that needs it.",
    },
  ],
  footerText: "Structured in Payload. Presented with KIBO UI.",
};

export async function getLandingPage(): Promise<LandingPageContent> {
  const payloadURL = process.env.PAYLOAD_API_URL ?? "http://localhost:3002";

  try {
    const response = await fetch(`${payloadURL}/api/globals/landing-page`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Payload returned ${response.status}`);
    }

    return (await response.json()) as LandingPageContent;
  } catch (error) {
    console.warn(
      "Using landing page fallback because Payload is unavailable.",
      error,
    );
    return fallbackContent;
  }
}
