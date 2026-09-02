import ButtonLink from '../components/ButtonLink.jsx';
import PageHero from '../components/PageHero.jsx';
import PageMeta from '../components/PageMeta.jsx';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found | Dilasa Yaman" description="The requested page could not be found." />
      <PageHero eyebrow="404" title="This page is not available.">
        <ButtonLink to="/" variant="secondary">
          Return Home
        </ButtonLink>
      </PageHero>
    </>
  );
}
