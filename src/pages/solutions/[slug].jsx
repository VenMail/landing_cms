import SolutionPage from "@/components/templates/SolutionPage";
import { getAllSolutionSlugs, getSolution } from "@/data/solutions";

export default function SolutionDynamic({ solution }) {
  if (!solution) return null;
  return <SolutionPage solution={solution} />;
}

export async function getStaticPaths() {
  const slugs = getAllSolutionSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const solution = getSolution(params.slug);
  if (!solution) {
    return { notFound: true };
  }
  return { props: { solution } };
}
