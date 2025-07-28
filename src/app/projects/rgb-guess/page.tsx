import Layout from "@/components/layout";
import RgbGuessGame from "@/components/rgb-guess/rbgGuessGame";

export default function RgbGuessPage() {
  return (
    <Layout>
      <div className="w-full p-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text drop-shadow-solid-crust mb-8">
          RGB Guess Game
        </h2>
      </div>
      <RgbGuessGame />
    </Layout>
  );
}
