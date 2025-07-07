import Layout from "@/components/layout";
import ProjectList from "@/components/projectList";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold text-mauve mb-4">
        Welcome to Project Hub 💫
      </h2>
      <ProjectList />
    </Layout>
  );
}
