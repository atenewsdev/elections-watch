type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Top4CandidatePage({ params }: Props) {
  const { slug } = await params;
  return <div>Top 4 Candidate: {slug}</div>;
}
