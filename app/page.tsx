import DevmateReview from './devmate';

export default function Home() {
  return (
    // We removed 'max-w-3xl', 'py-32', 'px-16', 'items-center', and 'flex'
    // This allows DevmateReview to take over the full screen.
    <main className="w-full min-h-screen bg-white dark:bg-black">
      <DevmateReview />
    </main>
  );
}