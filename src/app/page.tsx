import Layout from "@/components/layout";
import ProjectList from "@/components/projectList";

export default function Home() {
  return (
    <Layout>
      <div className="w-full p-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text drop-shadow-solid-crust mb-8">
          Included projects 💻
        </h2>
      </div>
      <ProjectList />
    </Layout>
  );
}
