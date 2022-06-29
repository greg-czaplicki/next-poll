import Head from "next/head";
import { prisma } from "../server/db/client";

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
