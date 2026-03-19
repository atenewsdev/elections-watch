type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ClusterRepresentativePage({ params }: Props) {
  const { slug } = await params;
  return <div>Cluster Representative: {slug}</div>;
}
