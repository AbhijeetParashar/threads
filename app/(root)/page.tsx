import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import ThreadCard from "@/components/cards/ThreadCard";
import Pagination from "@/components/shared/Pagination";

import { fetchPosts } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ConnectVerse - A Social Media Platform by Abhijeet Kumar",
  description:
    "ConnectVerse, created by Abhijeet Kumar, is a next-generation social media platform designed to bring people closer through seamless communication and sharing. Join the community today!",
  keywords: [
    "ConnectVerse",
    "Abhijeet Kumar",
    "social media platform",
    "Threads alternative",
    "online community",
    "social networking",
  ],
  authors: [
    {
      name: "Abhijeet Kumar",
      url: "https://www.linkedin.com/in/abhijeetkumar29/details/recommendations/",
    },
  ],
  openGraph: {
    title: "ConnectVerse - A Social Media Platform by Abhijeet Kumar",
    description:
      "Join ConnectVerse, a social media platform by Abhijeet Kumar, designed to connect people through seamless communication and sharing.",
    url: "https://www.linkedin.com/in/abhijeetkumar29/",
    siteName: "ConnectVerse",
    images: [
      {
        url: "https://github-production-user-asset-6210df.s3.amazonaws.com/53019674/410921294-e22a692d-6e14-4fd4-b97c-3737a244b771.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250207T130600Z&X-Amz-Expires=300&X-Amz-Signature=6f9818bad63c7edfa80e239bf65f486893b3fbab8e65b4be86faed06ae95aa7d&X-Amz-SignedHeaders=host",
        width: 1200,
        height: 630,
        alt: "ConnectVerse - A Social Media Platform by Abhijeet Kumar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConnectVerse - A Social Media Platform by Abhijeet Kumar",
    description:
      "Discover ConnectVerse, a social media platform by Abhijeet Kumar, designed to bring people closer through seamless communication and sharing.",
    images: [
      "https://github-production-user-asset-6210df.s3.amazonaws.com/53019674/410921294-e22a692d-6e14-4fd4-b97c-3737a244b771.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250207T130600Z&X-Amz-Expires=300&X-Amz-Signature=6f9818bad63c7edfa80e239bf65f486893b3fbab8e65b4be86faed06ae95aa7d&X-Amz-SignedHeaders=host",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchPosts(
    searchParams.page ? +searchParams.page : 1,
    30
  );

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user.id}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>

      <Pagination
        path="/"
        pageNumber={searchParams?.page ? +searchParams.page : 1}
        isNext={result.isNext}
      />
    </>
  );
}

export default Home;
