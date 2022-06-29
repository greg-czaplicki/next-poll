import Head from "next/head";
import { prisma } from "../server/db/client";

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold text-blue-800">Hello world!</h1>
      <p>Hello Next.js</p>
      <code>{props.questions}</code>
    </div>
  );
}

export const getServerSideProps = async () => {
  const questions = await prisma.pollQuestion.findMany();

  return {
    props: {
      questions: JSON.stringify(questions),
    },
  };
};
