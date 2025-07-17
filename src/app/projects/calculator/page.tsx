import Layout from "@/components/layout";
import CalculatorApp from "@/components/calculator/calculatorApp";

export default function CalculatorPage() {
  return (
    <Layout>
      <div className="w-full p-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text drop-shadow-solid-crust mb-8">
          Basic Calculator
        </h2>
      </div>
      <CalculatorApp />
    </Layout>
  );
}
